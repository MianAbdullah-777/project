"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import ProcessFlow from "@/components/ProcessFlow";

const OFFERINGS = [
  { step: "01", title: "AI Development Consultation", desc: "Expert guidance for enterprises and startups on where and how to integrate AI into your workflow for maximum business impact." },
  { step: "02", title: "AIOps", desc: "Systems that analyse data, monitor infrastructure, and do predictive failure detection with anomaly detection capabilities for IT operations." },
  { step: "03", title: "AI Assistant & Chatbot", desc: "Conversational agents trained to understand business context, user intent, and sentiment for customer support and operational guidance 24/7." },
  { step: "04", title: "AI Product Development", desc: "Full-spectrum AI products with market assessment and scalable architecture, from initial concept to market readiness." },
  { step: "05", title: "AI as a Service", desc: "Pre-built AI APIs hosted on cloud servers, customized to your specific business needs without requiring full custom development." },
  { step: "06", title: "Generative AI", desc: "Systems that create text, process images and voice, trained on your data for business insights and tailored responses." },
  { step: "07", title: "AI Integration", desc: "Seamless incorporation of AI into your existing infrastructure for information processing, insights, and analytics." },
  { step: "08", title: "AI Voice Agents", desc: "Voice-enabled AI agents capable of receiving and processing voice inputs for customer care and sales functions." },
  { step: "09", title: "AI Copilot Solutions", desc: "Tools that provide employees with contextual data to streamline workflows and improve team coordination in real time." },
];

const CAPABILITIES = [
  { title: "Machine Learning", desc: "Apply ML to make software intelligent in your data’s context for informed decision-making." },
  { title: "Generative AI", desc: "Solutions that automate workflows, improve customer experiences, and create new ways to use your data." },
  { title: "Predictive Analysis", desc: "Advanced data and forecasting capabilities enabling data-driven decisions and trend prediction." },
  { title: "Computer Vision", desc: "Image processing solutions ranging from object recognition and image detection to OCR and visual inspection." },
  { title: "Deep Learning", desc: "Training models on your data so the AI becomes better as more data is processed." },
  { title: "Audio Processing", desc: "Solutions that understand and generate human-like speech for real-time conversations." },
  { title: "NLP", desc: "Systems that understand natural language and can process and assimilate inputs accurately." },
];

const PROCESS = [
  { step: "01", title: "Business Discovery", desc: "Understanding your business, customers, workflows, and problems to identify AI opportunities and define success metrics." },
  { step: "02", title: "Data & AI Strategy", desc: "Assessment of existing data, infrastructure, and systems plus model and technology selection." },
  { step: "03", title: "Validation & Development", desc: "Integration with testing and refinement based on benchmarks before deployment." },
  { step: "04", title: "Deployment & Optimization", desc: "Post-launch monitoring, performance evaluation, and continuous optimization as needs evolve." },
];

const TECH_STACK = [
  { category: "Data Storage", count: 10, items: ["Amazon S3", "Google Cloud Storage", "Azure Blob Storage", "PostgreSQL", "MySQL", "Apache Cassandra", "MongoDB", "DynamoDB", "Hadoop HDFS", "Databricks"] },
  { category: "Data Annotation", count: 5, items: ["Label Studio", "CVAT", "SageMaker Ground Truth", "Supervise.ly", "LabelImg"] },
  { category: "Data Preprocessing", count: 14, items: ["OpenCV", "Pillow", "scikit-image", "Albumentations", "NVIDIA DALI", "spaCy", "NLTK", "Hugging Face", "TextBlob", "Gensim", "Pandas", "Dask", "PySpark", "PyArrow"] },
  { category: "Algorithm Development", count: 11, items: ["Sobel", "Canny", "Otsu’s thresholding", "Adaptive thresholding", "Watershed", "Lucas-Kanade", "Farneback", "Erosion", "Dilation", "FFT", "Wavelet Transforms"] },
  { category: "ML Models", count: 10, items: ["XGBoost", "LightGBM", "CatBoost", "SVM", "k-NN", "Random Forest", "Decision Trees", "Naïve Bayes", "Logistic Regression", "Linear Regression"] },
  { category: "Deep Learning Models", count: 18, items: ["VGG", "ResNet", "Inception", "MobileNet", "EfficientNet", "YOLO", "YOLOX", "SSD", "Faster R-CNN", "U-Net", "AdaptNet", "SAM2", "Mask R-CNN", "DeepLab", "GANs", "StyleGAN", "CycleGAN", "LSTM"] },
  { category: "Generative AI", count: 26, items: ["Claude", "GPT-4", "Llama", "Mistral", "Phi-3.5", "Cohere", "BERT", "T5", "DALL·E", "Stable Diffusion", "Hugging Face", "LlamaIndex", "LangChain", "OpenAI API", "Azure OpenAI", "AWS Bedrock", "Qdrant", "pgvector", "DeepEval", "vLLM", "Unsloth"] },
  { category: "Model Training", count: 15, items: ["PyTorch", "TensorFlow/Keras", "JAX", "SGD", "Adam", "RMSprop", "Cross-validation", "K-fold", "MLflow", "Ray Train", "Ray Tune", "Weights & Biases", "TensorBoard"] },
  { category: "Deployment & Integration", count: 13, items: ["TensorFlow Serving", "TorchServe", "Ray Serve", "ONNX Runtime", "NVIDIA Triton", "FastAPI", "Django", "gRPC", "TF Lite", "OpenVINO", "AWS SageMaker"] },
  { category: "Monitoring & Logging", count: 12, items: ["Elastic Stack", "CloudWatch", "Azure Monitor", "Prometheus", "Grafana", "Datadog", "New Relic", "Weights & Biases", "MLflow", "TensorBoard"] },
  { category: "MLOps & Orchestration", count: 14, items: ["Kubeflow", "MLflow", "TFX", "Apache Airflow", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Terraform", "Kubernetes", "Docker", "Helm", "Ray", "Azure Pipelines"] },
];

const AI_MODELS = [
  { category: "Generative", items: ["GPT-4", "Claude", "Gemini", "Llama", "Mistral", "DeepSeek", "Qwen", "Gemma", "Phi-4"] },
  { category: "Vision / Creative", items: ["Sora", "DALL·E", "Midjourney", "Stable Diffusion", "Gemini Vision", "Claude Vision"] },
  { category: "Speech / Language", items: ["Whisper", "TTS Transformers", "RoBERTa", "T5", "ERNIE", "Grok", "Jamba"] },
];

const RISK_STEPS = [
  { step: "01", title: "Risk Assessment", desc: "Identifying and evaluating risks across data, model infrastructure, compliance, security, and workflows." },
  { step: "02", title: "Data Protection", desc: "Using encryption, data isolation, and access control for information security." },
  { step: "03", title: "Model Selection & Validation", desc: "Evaluating models based on accuracy, reliability, and security alongside cost and latency." },
  { step: "04", title: "Grounded Responses", desc: "Connecting models with trusted data sources using retrieval-based grounding and RAG techniques." },
  { step: "05", title: "Human Oversight & Guardrails", desc: "Establishing rules for what AI is allowed to access while maintaining human workflow control." },
  { step: "06", title: "Failure & Security Testing", desc: "Testing for accurate outputs, bias, prompt injections, data leakage, and unauthorised access." },
  { step: "07", title: "Post-Deployment Monitoring", desc: "Tracking performance, accuracy, latency, usage, cost, and unusual behaviors." },
  { step: "08", title: "Continuous Refinement", desc: "Improving models, prompts, data, workflows, and guardrails based on monitoring results." },
];

const INDUSTRY_SOLUTIONS = [
  { name: "Healthcare", solutions: ["Intelligent Patient Support", "Clinical Document Intelligence", "Healthcare Workflow Automation", "Predictive Patient Insights"] },
  { name: "Education", solutions: ["Personalized Learning Assistants", "Intelligent Student Support", "Automated Assessment & Feedback", "Educator Productivity Tools"] },
  { name: "Banking", solutions: ["Intelligent Banking Assistants", "Fraud & Risk Detection", "Automated KYC & Compliance", "Personalized Financial Insights"] },
  { name: "Real Estate", solutions: ["Intelligent Property Discovery", "AI-Powered Recommendations", "Real Estate Document Intelligence", "Automated Lead Qualification"] },
  { name: "Retail & E-commerce", solutions: ["AI Shopping Assistants", "Product Recommendations", "Demand Forecasting", "Customer Support Automation"] },
  { name: "Logistics", solutions: ["Intelligent Route Optimization", "Shipment & Delivery Intelligence", "Predictive Demand Planning", "Automated Documentation"] },
  { name: "Travel", solutions: ["AI Travel Planning", "Personalized Trip Recommendations", "Intelligent Booking Assistance", "Automated Guest Support"] },
  { name: "Food & Delivery", solutions: ["Conversational Food Ordering", "Personalized Menu Recommendations", "Predictive Order & Demand Planning", "Intelligent Delivery Optimization"] },
];

const FAQS = [
  { q: "What AI development services does CodeNax offer?", a: "We provide AI consulting, AIOps, AI assistants & chatbots, AI product development, AI-as-a-service, generative AI, AI integration, AI voice agents, and AI copilots." },
  { q: "How does CodeNax ensure scalability?", a: "We integrate scalability as a standard by designing modular systems, scalable data pipelines, cloud infrastructure, and efficient model-serving workflows." },
  { q: "Can I integrate AI into my existing software?", a: "Yes, we offer services to integrate AI directly into your existing infrastructure, enabling familiar operations and seamless adoption." },
  { q: "Do you offer post-deployment support?", a: "Yes, we maintain separate teams for development and maintenance that grow with your growth through ongoing system maintenance." },
  { q: "What is the typical development timeline?", a: "AI software development typically requires 6–8 months depending on features and complexity." },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-xl border border-border bg-cadbury-purple overflow-hidden">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className="text-sm font-semibold text-navy">{q}</span>
        <svg className={`h-5 w-5 shrink-0 text-blue transition-transform duration-200 ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && <div className="px-5 pb-5"><p className="text-sm text-muted">{a}</p></div>}
    </div>
  );
}

export default function AIDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        tag="AI Development"
        title="AI Software Development Services for Business Growth"
        description="We take AI products from initial concept to production, combining strategy, development, integration, and ongoing optimization to address genuine business challenges."
        primaryCta="Start your AI project"
        secondaryCta="Get an estimate"
        secondaryHref="/estimate"
      />

      {/* Service Offerings */}
      <section className="bg-cadbury-purple py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">What We Offer</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Full-spectrum AI services tailored to your industry and use case.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERINGS.map((o) => (
              <div key={o.step} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <span className="text-sm font-bold text-blue">{o.step}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{o.title}</h3>
                <p className="mt-2 text-sm text-muted">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div aria-hidden="true" className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-blue/12 -z-5" style={{ top: "25%", right: "12%", animation: "particle-float-2 10s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Our AI Capabilities</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-cadbury-purple p-6 card-hover transition-all">
                <h3 className="text-base font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 section-grid-bg overflow-hidden noise-overlay">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[rgba(22,104,217,0.05)] blur-[64px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 30, height: 30, top: "12%", right: "8%", border: "1px solid rgba(22,104,217,0.08)", borderRadius: 5, animation: "rotate-3d 22s linear infinite, float 14s ease-in-out infinite" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/15 -z-5" style={{ bottom: "18%", left: "10%", animation: "particle-float-1 9s ease-in-out infinite 2s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-12">How We Work</h2>
          <ProcessFlow steps={PROCESS.map((s) => ({ name: s.title, desc: s.desc }))} />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(34,184,240,0.08)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Technology Stack</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">11 technology categories spanning 140+ tools and frameworks.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK.map((cat) => (
              <div key={cat.category} className="rounded-xl border border-border bg-cadbury-purple p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-blue uppercase tracking-wider">{cat.category}</h3>
                  <span className="text-xs font-medium text-muted">{cat.count} tools</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-light-bg px-3 py-1 text-xs font-medium text-navy">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 aurora-bg" />
        <div aria-hidden="true" className="pointer-events-none absolute -z-5 rounded-full" style={{ width: 20, height: 20, bottom: "15%", right: "6%", border: "1px solid rgba(139,92,246,0.06)", animation: "rotate-3d-slow 26s linear infinite reverse, float-diagonal 14s ease-in-out infinite 3s" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">AI Models We Deploy</h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {AI_MODELS.map((group) => (
              <div key={group.category} className="rounded-xl border border-border bg-light-bg p-6">
                <h3 className="text-sm font-bold text-blue uppercase tracking-wider">{group.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-cadbury-purple px-3 py-1 text-xs font-medium text-navy">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="bg-light-bg py-16 lg:py-24 section-grid-bg relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(22,104,217,0.10)", filter: "blur(64px)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">AI as a Layer — Risk Mitigation</h2>
          <p className="mt-3 text-muted text-center max-w-2xl mx-auto">Our 8-step framework for responsible, secure AI deployment.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RISK_STEPS.map((r) => (
              <div key={r.step} className="rounded-xl border border-border bg-cadbury-purple p-6">
                <span className="text-sm font-bold text-blue">{r.step}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{r.title}</h3>
                <p className="mt-2 text-sm text-muted">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="relative bg-cadbury-purple py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -z-5" style={{ width: 26, height: 26, top: "10%", left: "5%", border: "1px solid rgba(34,184,240,0.06)", borderRadius: 4, animation: "rotate-3d 20s linear infinite, float 12s ease-in-out infinite 2s" }} />
        <div aria-hidden="true" className="pointer-events-none absolute w-1 h-1 rounded-full bg-cyan/12 -z-5" style={{ bottom: "20%", right: "14%", animation: "particle-float-1 8s ease-in-out infinite" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center">Industry Solutions</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRY_SOLUTIONS.map((ind) => (
              <div key={ind.name} className="rounded-xl border border-border bg-light-bg p-6">
                <h3 className="text-base font-bold text-navy">{ind.name}</h3>
                <ul className="mt-3 space-y-2">
                  {ind.solutions.map((sol) => (
                    <li key={sol} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="mt-1 h-3 w-3 shrink-0 text-blue" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="3" /></svg>
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative bg-light-bg py-16 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 perspective-grid" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Frequently Asked Questions</h2>
          <div className="mt-10 mx-auto max-w-3xl space-y-4">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Ready to harness AI?" description="Tell us about your use case and we'll scope a solution in 48 hours." />
    </>
  );
}
