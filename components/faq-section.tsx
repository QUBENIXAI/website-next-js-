"use client";

import SectionHeading from "@/components/section-heading";
import { CaretDown } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useEffect, useState, type FormEvent } from "react";

const FAQ_STORAGE_KEY = 'faq-answers';

const Questions = [
    {
        question : 'What does Qubenix do?',
        answer : 'Qubenix builds AI-powered systems, business automations, chatbots, custom software, web applications, integrations, and digital platforms.'
    },
    {
        question : 'Does Qubenix provide AI automation services?',
        answer : 'Yes. AI automation is a core service area, covering workflow design, API integrations, business process automation, AI-powered task processing, and connected operational systems.'
    },
    {
        question : 'Can Qubenix build custom AI agents?',
        answer : 'Qubenix`s technical focus includes AI agents and intelligent workflows. Feasibility, architecture, scope, and deployment depend on requirements.'
    },
    {
        question : 'Can Qubenix integrate with existing software?',
        answer : 'Yes. Qubenix can integrate with existing software, APIs, and operational systems. The scope and feasibility depend on the existing infrastructure and integration requirements.'
    }
]

const prompt = `
    You are the official AI assistant for QUBENIX, an AI-first technology company specializing in AI automation, intelligent agents, voice AI, RAG systems, enterprise AI integrations, custom applications, and web development.

    Your purpose is to help website visitors understand QUBENIX’s services and discover how AI and software solutions can address their business challenges.

    COMPANY CONTEXT:
    QUBENIX builds technology solutions that help businesses automate workflows, improve operational efficiency, integrate AI into existing systems, and develop scalable digital products.

    CORE SERVICES:

    * AI Automation: Automating repetitive business workflows and operational processes.
    * AI Agents: Building intelligent agents that assist with research, task execution, coordination, and business operations.
    * Voice AI: AI-powered voice assistants for customer support, lead qualification, and call handling.
    * AI Outreach: Automating lead engagement, follow-ups, and sales communication.
    * RAG Systems: Connecting AI models to business documents, knowledge bases, and internal data for context-aware responses.
    * Enterprise AI Integration: Integrating AI into existing business software, APIs, and operational systems.
    * Custom Applications: Developing tailored applications, dashboards, and internal business tools.
    * Web Development: Building modern, responsive websites and digital experiences.
    * Document Intelligence: Using AI to extract, classify, summarize, and retrieve information from documents.
    * Business Process Automation: Streamlining workflows and reducing manual work through intelligent systems.
        BEHAVIOUR:

    1. Answer questions directly, accurately, and conversationally.
    2. Keep answers concise and easy to understand.
    3. When relevant, explain which QUBENIX service could address the visitor’s needs.
    4. For technical questions, explain concepts clearly without unnecessary jargon.
    5. If a visitor describes a business problem, suggest a practical solution using relevant QUBENIX capabilities.
    6. Never invent pricing, client names, case studies, performance metrics, guarantees, or unsupported capabilities.
    7. If you don’t know an answer, acknowledge the limitation and recommend contacting the QUBENIX team.
    8. Avoid aggressive sales pitches, generic marketing language, and repetitive introductions.
    9. Ask a follow-up question only when necessary to provide a useful answer.
    10. Never pretend to have performed an action or evaluated a business when you have not.
    11. Answer should not be more than 2 sentences as this is just FAQ Section

    TONE:
    Professional, intelligent, approachable, and solution-oriented. Sound like a knowledgeable technology consultant rather than a generic chatbot.

    OBJECTIVE:
    Help visitors understand QUBENIX, explore relevant AI and software solutions, and identify potential opportunities to improve their business.

    For project-specific inquiries, encourage visitors to contact the QUBENIX team through the website.

    Only use the company information provided in this context and any verified information supplied to you. Do not assume missing details are facts.
`

const CUSTOM_STORAGE_KEY = "faq-custom-questions";
const MAX_CUSTOM_QUESTIONS = 2;
const ease = [0.22, 1, 0.36, 1] as const;

function readStoredAnswers() {
    const raw = localStorage.getItem(FAQ_STORAGE_KEY);
    if (!raw) {
        return {};
    }

    try {
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
        return {};
    }
}

function readCustomQuestions() {
    const raw = localStorage.getItem(CUSTOM_STORAGE_KEY);
    if (!raw) {
        return [];
    }

    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed)
            ? parsed.filter((question) => typeof question === "string")
            : [];
    } catch {
        return [];
    }
}

export default function FaqSection() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(
        Questions[0].question,
    );
    const [storedAnswers, setStoredAnswers] = useState<Record<string, string>>(
        {},
    );
    const [customQuestions, setCustomQuestions] = useState<string[]>([]);
    const [draft, setDraft] = useState("");
    const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);
    const [loadingQuestion, setLoadingQuestion] = useState<string | null>(null);

    useEffect(() => {
        setStoredAnswers(readStoredAnswers());
        setCustomQuestions(readCustomQuestions());
    }, []);

    const saveAnswer = (question: string, nextAnswer: string) => {
        const nextAnswers = {
            ...readStoredAnswers(),
            [question]: nextAnswer,
        };
        localStorage.setItem(FAQ_STORAGE_KEY, JSON.stringify(nextAnswers));
        setStoredAnswers(nextAnswers);
    };

    const requestAnswer = async (question: string) => {
        const stored = readStoredAnswers();
        if (typeof stored[question] === "string") {
            setStoredAnswers(stored);
            return true;
        }

        setLoadingQuestion(question);

        try {
            const response = await fetch("/api/gemini", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question, prompt }),
            });
            const data = await response.json();

            if (!response.ok || typeof data.answer !== "string") {
                throw new Error(data.error ?? "Request failed");
            }

            saveAnswer(question, data.answer);
            return true;
        } catch (error) {
            console.error("Error fetching answer:", error);
            setStoredAnswers((current) => ({
                ...current,
                [question]:
                    "An error occurred while fetching the answer. Please try again.",
            }));
            return false;
        } finally {
            setLoadingQuestion(null);
        }
    };

    const addQuestion = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const question = draft.trim();
        if (!question || customQuestions.length >= MAX_CUSTOM_QUESTIONS) {
            return;
        }

        if (customQuestions.includes(question)) {
            setDraft("");
            setOpenQuestion(question);
            return;
        }

        setDraft("");
        setPendingQuestion(question);
        setOpenQuestion(question);

        const saved = await requestAnswer(question);
        if (!saved) {
            return;
        }

        const nextQuestions = [...customQuestions, question].slice(
            0,
            MAX_CUSTOM_QUESTIONS,
        );
        localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(nextQuestions));
        setCustomQuestions(nextQuestions);
        setPendingQuestion(null);
    };

    return (
        <div className="flex w-full max-w-3xl flex-col gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-16">
            <section className="flex flex-col gap-2 text-center">
                <SectionHeading className="text-2xl font-semibold sm:text-4xl">
                    Frequently Asked Questions
                </SectionHeading>
                <p className="text-xs leading-5 text-gray-500 sm:text-base sm:leading-6">
                    Find answers to common questions about QUBENIX’s services and
                    capabilities.
                </p>
            </section>

            <div className="flex flex-col gap-5 px-3 sm:gap-8 sm:px-6">
                {Questions.map((item) => (
                    <FaqRow
                        key={item.question}
                        question={item.question}
                        answer={storedAnswers[item.question] ?? item.answer}
                        open={openQuestion === item.question}
                        onToggle={() =>
                            setOpenQuestion((current) =>
                                current === item.question ? null : item.question,
                            )
                        }
                    />
                ))}
                {customQuestions.map((question) => (
                    <FaqRow
                        key={question}
                        question={question}
                        answer={storedAnswers[question] ?? ""}
                        open={openQuestion === question}
                        onToggle={() =>
                            setOpenQuestion((current) =>
                                current === question ? null : question,
                            )
                        }
                    />
                ))}
                {pendingQuestion && !customQuestions.includes(pendingQuestion) ? (
                    <FaqRow
                        question={pendingQuestion}
                        answer={
                            loadingQuestion === pendingQuestion
                                ? "..."
                                : (storedAnswers[pendingQuestion] ?? "")
                        }
                        open={openQuestion === pendingQuestion}
                        onToggle={() =>
                            setOpenQuestion((current) =>
                                current === pendingQuestion ? null : pendingQuestion,
                            )
                        }
                    />
                ) : null}
            </div>
        </div>
    );
}

function FaqRow({
    question,
    answer,
    open,
    onToggle,
}: {
    question: string;
    answer: string;
    open: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="relative">
            {open ? (
                <motion.div
                    aria-hidden
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.28, ease }}
                    className="pointer-events-none absolute -inset-x-2 -inset-y-2 z-10 sm:-inset-x-3 sm:-inset-y-2.5"
                >
                    <span className="absolute top-0 -right-3 -left-3 border-t border-dashed border-[#b5b5b5] sm:-right-8 sm:-left-8" />
                    <span className="absolute bottom-0 -right-3 -left-3 border-t border-dashed border-[#b5b5b5] sm:-right-8 sm:-left-8" />
                    <span className="absolute -top-3 -bottom-3 left-0 border-l border-dashed border-[#b5b5b5] sm:-top-5 sm:-bottom-5" />
                    <span className="absolute -top-3 -bottom-3 right-0 border-l border-dashed border-[#b5b5b5] sm:-top-5 sm:-bottom-5" />
                </motion.div>
            ) : null}
            <div
                className={`relative rounded-2xl px-4 py-4 transition-colors duration-300 sm:rounded-[18px] sm:px-6 sm:py-5 ${
                    open ? "bg-white" : "border border-[#e4e4e4]"
                }`}
            >
                <button
                    type="button"
                    aria-expanded={open}
                    onClick={onToggle}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left sm:gap-6"
                >
                    <span className="text-base font-medium leading-snug tracking-tight text-black sm:text-lg">
                        {question}
                    </span>
                    <motion.span
                        aria-hidden
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="shrink-0 text-black"
                    >
                        <CaretDown className="h-4 w-4 sm:h-[18px] sm:w-[18px]" weight="bold" />
                    </motion.span>
                </button>
                <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                    <div className="overflow-hidden">
                        <motion.p
                            initial={false}
                            animate={{ opacity: open ? 1 : 0, y: open ? 0 : -4 }}
                            transition={{ duration: 0.35, ease }}
                            className="pt-2.5 text-sm leading-6 text-[#6a6a6a] sm:pt-3 sm:text-base sm:leading-7"
                        >
                            {answer}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
}
