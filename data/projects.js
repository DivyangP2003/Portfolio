import {
  Zap,
  Users,
  Code,
  Brain,
  Database,
  LineChart,
  Globe,
  Calendar,
  Shield,
} from "lucide-react";

export const projects = [
  // ===============================
  // 1️⃣ FLAGSHIP — FINANCIAL DATA + AGENTIC AI/ML
  // ===============================
  {
    id: "ai-market-intel",
    category: "AI/ML",
    title: "AI Market Intelligence Platform",
    subtitle: "Multi-Agent Financial Analytics System",
    descriptionShort:
      "Institutional-grade multi-agent LLM system analyzing global equities, fundamentals, sentiment, and portfolio risk.",
    impact: ["500+ tickers", "6 AI Agents", "5000+ portfolio simulations"],
    features: [
      { label: "Risk Modeling (VaR/CVaR)", icon: LineChart },
      { label: "LLM Market Insights", icon: Brain },
      { label: "Portfolio Simulation", icon: Database },
    ],
    technologies: [
      "Python",
      "Multi-Agent Systems",
      "LLMs",
      "LangChain",
      "Streamlit",
      "Statsmodels",
      "Plotly",
    ],
    image: "/images/ai-market-intel/DashboardOverview.png",
    images: [
      "/images/ai-market-intel/DashboardOverview.png",
      "/images/ai-market-intel/AgentWorkflow.png",
      "/images/ai-market-intel/AID1.png",
      "/images/ai-market-intel/AID4.png",
      "/images/ai-market-intel/R&C2.png",
      "/images/ai-market-intel/R&C4.png",
      "/images/ai-market-intel/CDD.png",
      "/images/ai-market-intel/AT.png",
    ],
    liveDemo: "https://aifinanceagentllm.streamlit.app/",
    github: "https://github.com/DivyangP2003/ai_finance_agent_llm",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "architecture", label: "Multi-Agent Architecture" },
      { key: "quant", label: "Quantitative Analysis" },
      { key: "aiDashboard", label: "AI-Powered Dashboard" },
      { key: "portfolio", label: "Portfolio Engine" },
      { key: "sentiment", label: "Sentiment Analysis" },
      { key: "global", label: "Global Equity Support" },
      { key: "finalReport", label: "Final Report" },
    ],
    descriptionSections: {
      overview: [
        "• Multi-agent AI system for global equity and portfolio analysis.",
        "• Combines LLM reasoning with quantitative finance analytics.",
        "• Supports 500+ equities with benchmark-aware insights.",
        "• Generates institutional-grade reports for researchers & traders.",
        "• Provides interactive explanations powered by Gemini 2.0.",
      ],

      architecture: [
        "• Six specialized agents—Market, Company Research, Sentiment, Risk, Portfolio, Team Lead.",
        "• Each agent analyzes a specific domain independently.",
        "• Orchestrated multi-agent workflow using structured data inputs.",
        "• TeamLeadAgent merges outputs into a unified benchmark-aware report.",
        "• Integrates price data, fundamentals, returns, and sentiment feeds.",
      ],

      quant: [
        "• Computes VaR, CVaR, rolling beta, and drawdown curves.",
        "• Generates correlation heatmaps and volatility surfaces.",
        "• Performs stress tests (shock + historical crash scenarios).",
        "• Calculates alpha, tracking error, and factor-style metrics.",
        "• Enables benchmark-relative performance diagnostics.",
      ],

      aiDashboard: [
        "• Users can ask Gemini to explain charts and anomalies.",
        "• Provides trend interpretation, risk commentary, and alerts.",
        "• Multi-chart insights view with synthesized analysis.",
        "• Detects unusual volatility, sentiment flips, and regime shifts.",
        "• Supports interactive exploration of quantitative results.",
      ],

      portfolio: [
        "• Supports multiple allocation models: EW, Risk Parity, Momentum Tilt.",
        "• Computes expected returns & risk interpretation for each strategy.",
        "• Simulates 5000+ portfolio paths (drawdowns, volatility, Sharpe).",
        "• Provides sector approximation & diversification scores.",
        "• Generates recommendation summaries with rationale.",
      ],

      sentiment: [
        "• Region-aware news sentiment from RSS feeds.",
        "• Company metadata + fundamentals auto-parsed for deep dives.",
        "• Detects earnings catalysts, valuation flags, and news momentum.",
        "• SentimentAgent summarizes multi-region news narratives.",
        "• CompanyResearchAgent produces structured bull/bear insights.",
      ],

      global: [
        "• Supports multi-country tickers with auto-suffix resolution.",
        "• Benchmark selection based on region (NIFTY, S&P 500, FTSE, etc.).",
        "• Local-language news handling for sentiment extraction.",
        "• Normalizes price, returns, and volatility across exchanges.",
        "• Enables cross-country comparison and global reporting.",
      ],

      finalReport: [
        "• Consolidates outputs from all six agents into one report.",
        "• Includes quantitative metrics, sentiment scoring & charts.",
        "• Contextualizes everything against benchmark performance.",
        "• Generates recommendations backed by both LLM & quant signals.",
        "• Provides downloadable narratives for research/portfolio use.",
      ],
    },
  },
  // ===============================
  // 2️⃣ DATA ENGINEERING + PIPELINES (HIGH PRIORITY)
  // ===============================
  {
    id: "swiggy-de",
    category: "Data Engineering",
    title: "Swiggy Data Engineering Pipeline",
    subtitle: "Production-Grade ETL + Medallion Architecture",
    descriptionShort:
      "End-to-end ETL system implementing Medallion Architecture with audit logs, incremental loads, and KPI automation.",
    impact: ["80% pipeline latency reduction", "Automated KPI refresh"],
    features: [
      { label: "ETL Pipelines", icon: Database },
      { label: "Data Quality & Audits", icon: Code },
      { label: "KPI Automation", icon: LineChart },
    ],
    technologies: ["Python", "SQL", "Snowflake", "Airflow", "ETL Pipelines"],
    image: "/images/swiggy-de/Overview.png",

    images: [
      "/images/swiggy-de/Architecture.png",
      "/images/swiggy-de/Overview.png",
    ],
    // github: "https://github.com/DivyangP2003/SloozeChallenge",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "architecture", label: "Architecture" },
      { key: "qualityGovernance", label: "Quality & Governance" },
      { key: "transformation", label: "Data Transformation" },
      { key: "orchestration", label: "Orchestration" },
      { key: "businessImpact", label: "Business Impact" },
    ],
    descriptionSections: {
      overview: [
        "• End-to-end data engineering pipeline built using Medallion Architecture.",
        "• Processes large-scale transactional datasets for analytics readiness.",
        "• Implements ingestion → cleaning → transformation → modeling workflows.",
        "• Produces fact/dimension tables optimized for BI and operational reporting.",
        "• Designed for performance, governance, and real-time KPI automation.",
      ],

      architecture: [
        "• Bronze–Silver–Gold layered data architecture for structured transformations.",
        "• Bronze: Raw ingestion of large transactional data (orders, customers, delivery).",
        "• Silver: Cleansed, validated, schema-enforced operational tables.",
        "• Gold: Business-ready models, aggregates, and dimensional schemas.",
        "• Snowflake used for storage optimization, partitioning, and compute scaling.",
      ],

      qualityGovernance: [
        "• Enforced schema-level data validation at every stage.",
        "• Added audit logging for row counts, processing times, and transformation lineage.",
        "• Implemented incremental loads with CDC support for efficient refresh.",
        "• Ensured data governance using metadata tracking and consistent naming.",
        "• Established lineage visibility to track pipeline performance and reliability.",
      ],

      transformation: [
        "• Modeled business entities using fact and dimension tables.",
        "• Applied surrogate keys, SCD logic, and normalization techniques.",
        "• Designed KPIs for order volumes, delivery efficiency, and revenue trends.",
        "• Optimized SQL queries using indexing, clustering, and task pruning.",
        "• Created optimized snapshots for BI tools to consume efficiently.",
      ],

      orchestration: [
        "• Automated the entire pipeline using DAG-style orchestration.",
        "• Scheduled periodic refreshes to maintain real-time dashboard updates.",
        "• Enabled dependency-based execution for stable and predictable ETL runs.",
        "• Reduced manual work by over 80% with automated workflow triggers.",
        "• Integrated logs + monitoring for failure alerts and performance insights.",
      ],

      businessImpact: [
        "• Delivered high-quality, analytics-ready datasets for supply chain insights.",
        "• Improved data reliability through systematic validation and lineage tracking.",
        "• Enhanced BI dashboard performance with optimized transformations.",
        "• Enabled stakeholders to monitor delivery trends and revenue metrics in real time.",
        "• Strengthened understanding of supply-chain analytics and DE best practices.",
      ],
    },
  },

  {
    id: "sql-dwh",
    category: "Data Engineering",
    title: "SQL Data Warehouse",
    subtitle: "Analytics Engineering + Star Schema",
    descriptionShort:
      "Business-ready data warehouse using structured layers, ETL pipelines, and BI reporting optimizations.",
    impact: ["Optimized SQL reporting", "Reliable analytics-ready tables"],
    features: [
      { label: "Data Modeling", icon: Database },
      { label: "ETL Optimization", icon: Code },
      { label: "Star Schema Design", icon: LineChart },
    ],
    technologies: [
      "MSSQL",
      "ETL",
      "Star Schema",
      "Data Modeling",
      "Medallion Architecture",
      "ETL Automation",
      "SQL Performance Tuning",
    ],
    image: "/images/sql-dwh/data_architecture.png",
    github: "https://github.com/DivyangP2003/sql-data-warehouse",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "architecture", label: "Architecture" },
      { key: "etlPipelines", label: "ETL Pipelines" },
      { key: "dataModeling", label: "Data Modeling" },
      { key: "analyticsReporting", label: "Analytics Reporting" },
      { key: "businessImpact", label: "Business Impact" },
    ],
    descriptionSections: {
      overview: [
        "• Complete end-to-end data warehouse designed using industry-standard practices.",
        "• Implements Medallion Architecture (Bronze → Silver → Gold) in SQL Server.",
        "• Consolidates ERP + CRM datasets into a unified analytics-ready model.",
        "• Includes ETL pipelines, dimensional modeling, and SQL-based reporting.",
        "• Built to demonstrate real-world data engineering, analytics, and documentation workflows.",
      ],

      architecture: [
        "• Follows Medallion Architecture for structured data transformation.",
        "• Bronze Layer: Raw ingestion of ERP + CRM CSV data into SQL Server.",
        "• Silver Layer: Cleansing, deduplication, standardization, and normalization.",
        "• Gold Layer: Business-ready star schema with fact + dimension tables.",
        "• Architecture diagrams created using Whimsical and documented in project docs.",
      ],

      etlPipelines: [
        "• Developed SQL-based ETL scripts organized into Bronze, Silver, and Gold folders.",
        "• Bronze ETL loads raw CSVs into staging tables with minimal preprocessing.",
        "• Silver ETL applies heavy data cleaning, referential integrity fixes, and type standardization.",
        "• Gold ETL builds fact tables (Sales, Orders) and dimensional tables (Customer, Product, Date).",
        "• Ensured consistent naming conventions and metadata tracking for maintainability.",
      ],

      dataModeling: [
        "• Designed a complete star schema optimized for analytics and reporting.",
        "• Created dimensions: Customer, Product, Date, Geography, and more.",
        "• Designed fact tables capturing sales, revenue, order behavior, and product performance.",
        "• Used surrogate keys, lookup resolution, normalization, and schema validation.",
        "• Documented the full model with ERDs and data catalog files.",
      ],

      analyticsReporting: [
        "• Built SQL analytics covering customer behavior, product performance, and sales trends.",
        "• Designed time-series metrics for revenue, order velocity, and customer retention.",
        "• Created KPIs for stakeholder decision-making and performance evaluation.",
        "• Ensured that analytics run efficiently using indexed and optimized tables.",
        "• Demonstrates strong ability to turn raw data into business insights.",
      ],

      businessImpact: [
        "• Unified data model enables consistent, reliable analytics across business domains.",
        "• Cleansed and validated data ensures trustworthy reporting and reduced manual rework.",
        "• Optimized Gold-layer tables significantly improve BI dashboard performance.",
        "• Stakeholders gain insights into customer behavior, sales patterns, and product trends.",
        "• Demonstrates practical end-to-end DE + analytics skills using SQL Server.",
      ],
    },
  },

  // ===============================
  // 3️⃣ CORE DATA SCIENCE
  // ===============================
  {
    id: "inventory-ds",
    category: "Data Science",
    title: "Inventory Optimization & Sales Analytics",
    subtitle: "Forecasting & Inventory Planning",
    descriptionShort:
      "Demand forecasting, EOQ optimization, supplier scoring, and peak-season analytics.",
    impact: ["Reduced stockouts", "Improved forecasting accuracy"],
    features: [
      { label: "Time-Series Forecasting", icon: LineChart },
      { label: "EOQ Optimization", icon: Brain },
      { label: "ABC Classification", icon: Database },
    ],
    technologies: [
      "Python",
      "Pandas",
      "Time-Series",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    image: "/images/inventory-ds/Overview.png",
    github: "https://github.com/DivyangP2003/SloozeChallenge",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "forecasting", label: "Demand Forecasting" },
      { key: "abc", label: "ABC Classification" },
      { key: "eoq", label: "EOQ Optimization" },
      { key: "reorder", label: "Reorder Point Logic" },
      { key: "seasonal", label: "Seasonal Analysis" },
      { key: "suppliers", label: "Supplier Performance Analysis" },
      { key: "insights", label: "Insights & Recommendations" },
    ],
    descriptionSections: {
      overview: [
        "An end-to-end data science pipeline built to optimize inventory planning using forecasting, EOQ models, reorder point logic, and supplier performance analysis.",
        "Ingests and processes multi-source sales, purchase, lead-time, and inventory data to generate actionable operational insights.",
        "Designed to reduce stockouts, improve demand predictability, and streamline procurement decisions.",
      ],

      forecasting: [
        "• Built SKU-level demand forecasting using Python, Pandas, and statistical time-series models.",
        "• Identified trends and seasonal components using decomposition techniques.",
        "• Generated monthly and weekly forecasts to enhance procurement and planning decisions.",
        "• Validated predictions using MAPE, RMSE, and rolling-window evaluation.",
      ],

      abc: [
        "• Performed ABC classification based on revenue contribution and demand frequency.",
        "• Segmented SKUs into A/B/C categories to support differentiated restocking policies.",
        "• Highlighted high-value SKUs requiring tighter control and optimized replenishment.",
      ],

      eoq: [
        "• Implemented the classic EOQ model to compute cost-optimal order quantities for each SKU.",
        "• Calculated carrying cost, ordering cost, and annual demand automatically.",
        "• Identified over-stocked and under-stocked products through EOQ deviation insights.",
      ],

      reorder: [
        "• Calculated reorder points using expected daily demand and lead time variability.",
        "• Modeled safety stock based on demand variance and service-level targets.",
        "• Flagged SKUs with high stockout risk due to irregular supplier performance.",
        "• Provided recommended reorder windows and buffer thresholds.",
      ],

      seasonal: [
        "• Conducted seasonal analysis to identify high-demand periods, promotional peaks, and category-wise seasonality.",
        "• Analyzed patterns across months, quarters, and events to support procurement alignment.",
        "• Generated recommendations for peak-season inventory preparation.",
      ],

      suppliers: [
        "• Performed supplier performance analytics including lead time variability, delivery delays, and order accuracy.",
        "• Identified high-risk suppliers causing stockouts or fulfilment bottlenecks.",
        "• Integrated supplier scoring into reorder and EOQ logic.",
      ],

      insights: [
        "• Produced SKU-level performance scorecards covering demand, volatility, profitability, and stocking behavior.",
        "• Identified top-performing products and slow-moving inventory using Pareto analysis.",
        "• Provided actionable insights for procurement, sales planning, and inventory managers.",
      ],
    },
  },

  {
    id: "fake-news",
    category: "Data Science",
    title: "Fake News Detection (LSTM)",
    subtitle: "NLP + Deep Learning",
    descriptionShort:
      "Deep learning-based classifier detecting real vs fake news using LSTM networks.",
    impact: ["~94% accuracy", "Complete NLP pipeline"],
    features: [
      { label: "Text Cleaning", icon: Code },
      { label: "LSTM Modeling", icon: Brain },
      { label: "EDA + Visualization", icon: LineChart },
    ],
    technologies: ["TensorFlow", "Python", "NLP", "Text Preprocessing", "RAG"],
    image: "/images/fake-news/Overview.png",
    github:
      "https://github.com/DivyangP2003/Fake-News-Detection-with-TensorFlow",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "preprocessing", label: "Data Preprocessing" },
      { key: "eda", label: "Exploratory Data Analysis" },
      { key: "model", label: "Model Architecture" },
      { key: "training", label: "Training & Evaluation" },
      { key: "evaluation", label: "Model Evaluation" },
      { key: "insights", label: "Insights" },
      { key: "limitations", label: "Limitations" },
    ],
    descriptionSections: {
      overview: [
        "A deep learning–based text classification system designed to detect fake vs. real news articles using TensorFlow/Keras.",
        "Implements a complete NLP workflow, including preprocessing, feature engineering, model building, training, and evaluation.",
        "Achieved strong model performance through LSTM-based sequence learning and optimized text vectorization pipelines.",
      ],

      preprocessing: [
        "• Cleaned raw text by removing stopwords, punctuation, HTML tags, and special symbols.",
        "• Performed tokenization, lowercasing, and sequence padding for consistent input shape.",
        "• Encoded metadata fields such as author/title for additional contextual signals.",
        "• Constructed vocabulary index and handled out-of-vocab words gracefully.",
      ],

      eda: [
        "• Explored dataset characteristics including article length distribution, author contribution, and word frequency.",
        "• Identified patterns in writing style between fake and real news articles.",
        "• Visualized article counts, text patterns, and metadata correlations using Matplotlib/Seaborn.",
      ],

      model: [
        "• Built an LSTM-based neural architecture to capture long-term text dependencies.",
        "• Used Embedding layers for vector representation of words.",
        "• Added Dropout layers to mitigate overfitting and improve generalization.",
        "• Final Dense layer with sigmoid activation for binary fake/real classification.",
      ],

      training: [
        "• Trained model using TensorFlow/Keras with binary cross-entropy loss.",
        "• Optimized using Adam optimizer with tuned learning rates.",
        "• Applied train/validation split, callbacks, and batch training for stable convergence.",
        "• Performed hyperparameter tuning on embedding size, sequence length, and LSTM units.",
      ],

      evaluation: [
        "• Evaluated model using accuracy, precision, recall, F1-score, and confusion matrix.",
        "• Achieved ~94% accuracy with balanced performance across both classes.",
        "• Analyzed false positives/negatives to understand misclassification patterns.",
      ],

      insights: [
        "• Identified article writing patterns strongly correlated with fake news.",
        "• Observed metadata such as author/title contributing meaningful separation.",
        "• Highlighted that longer articles with consistent structure tend to be real, while abrupt narratives correlate with fake content.",
      ],

      limitations: [
        "• Model performance can vary with biased or noisy datasets.",
        "• Requires large and diverse training data to generalize well.",
        "• Cannot detect deep fakes, satire, or contextually ambiguous content without additional signals.",
      ],
    },
  },

  //   {
  //     id: "spotify-bi",
  //     category: "Data Science",
  //     title: "Spotify Streaming Analytics Dashboard",
  //     subtitle: "Business Intelligence + Time-Series",
  //     descriptionShort:
  //       "Dashboard analyzing listener patterns, track popularity, and artist performance.",
  //     impact: ["End-to-end BI pipeline", "Advanced DAX measures"],
  //     features: [
  //       { label: "DAX Metrics", icon: Code },
  //       { label: "BI Visualizations", icon: LineChart },
  //       { label: "SQL Transformations", icon: Database },
  //     ],
  //     technologies: ["Power BI", "SQL", "DAX"],
  //     image: "/projects/spotify.png",
  //     description: [
  //       "Developed a BI dashboard analyzing global streaming patterns and artist engagement.",
  //       "Designed DAX measures, SQL transformations, and time-series metrics.",
  //       "Improved data quality through preprocessing and consistency checks.",
  //     ],
  //   },

  // ===============================
  // 4️⃣ SUPPORTING PROJECTS (Still Useful)
  // ===============================
  {
    id: "expensiq",
    category: "Full-Stack",
    title: "ExpensIQ",
    subtitle: "AI-Powered Personal Finance",
    descriptionShort:
      "OCR-powered finance tracker with budgeting automation and AI insights.",
    impact: ["Real-time alerts", "AI spend classification"],
    features: [
      { label: "OCR Scanning", icon: Zap },
      { label: "AI Budgeting", icon: Brain },
      { label: "Automated Workflows", icon: Code },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "Gemini AI",
      "Inngest",
      "OCR",
      "Serverless APIs",
    ],
    image: "/images/expenseiq/Landing_Page.png",
    images: [
      "/images/expenseiq/Landing_Page.png",
      "/images/expenseiq/Account_Analysis.png",
      "/images/expenseiq/Dashboard.png",
      "/images/expenseiq/Daily_Budget.png",
      "/images/expenseiq/Monthly_Report.png",
      "/images/expenseiq/TransactionEdit(AI).png",
    ],
    liveDemo: "https://expensiq.vercel.app",
    github: "https://github.com/DivyangP2003/expensiq",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "architecture", label: "Architecture" },
      { key: "ocr_ai", label: "OCR + AI Classification" },
      { key: "automation", label: "Automation Workflows" },
      { key: "analytics", label: "Analytics Dashboard" },
      { key: "features", label: "Key Features" },
      { key: "security", label: "Security Measures" },
      { key: "reports", label: "Monthly Reports" },
    ],

    descriptionSections: {
      overview: [
        "ExpensIQ is an AI-powered personal finance management platform built with a full-stack architecture, combining OCR, LLM reasoning, automated workflows, and real-time budget monitoring.",
        "The system extracts data from receipts using AI, automates recurring transactions, generates monthly financial reports, and provides analytics dashboards for spending insights.",
        "Designed to deliver a seamless financial tracking experience using serverless background jobs, secure authentication, and a scalable database layer.",
      ],

      ocr_ai: [
        "• Implemented an OCR + Gemini Vision pipeline to extract amount, vendor, date, and category from receipt images.",
        "• Designed intelligent category prediction using natural-language reasoning from Gemini.",
        "• Auto-populated transaction forms, reducing manual entry by over 80% for typical users.",
      ],

      automation: [
        "• Built a robust job orchestration system using Inngest for CRON-based automation.",
        "• Automated recurring transactions (salary, subscriptions, bills) via daily scheduled workflows.",
        "• Added budget monitoring workflows running every 6 hours to detect overspending patterns.",
        "• Set up monthly reporting jobs generating AI-written summaries with charts and personalized insights.",
      ],

      analytics: [
        "• Developed interactive dashboards using Recharts to visualize spending patterns, category breakdowns, and month-wise trends.",
        "• Implemented filtering by accounts, date ranges, and categories to support granular analysis.",
        "• Added real-time budget thresholds with instant email alerts using Resend.",
      ],

      features: [
        "• Multi-account management with customizable spending categories.",
        "• Robust transaction CRUD with bulk operations for productivity.",
        "• Smart financial insights generated using LLM reasoning.",
        "• Responsive UI with Tailwind + ShadCN for smooth user experience.",
      ],

      architecture: [
        "• Frontend built using Next.js 15 with server components and optimized routing.",
        "• Backend powered by Supabase (PostgreSQL) with Prisma ORM for schema management.",
        "• Authentication handled via Clerk with secure session validation and Google OAuth.",
        "• Background tasks executed using Inngest (retries, queues, CRON jobs).",
        "• Email workflows powered by Resend for system alerts and AI reports.",
        "• Arcjet used for bot detection, abuse prevention, and rate limiting.",
      ],

      security: [
        "• Implemented role-based route protection and session validation via Clerk middleware.",
        "• Used Arcjet for bot detection, SQL injection prevention, and rate-limited API handling.",
        "• Ensured safe handling of financial data with policy-driven access.",
      ],

      reports: [
        "• Automated monthly financial summaries sent as email reports with insights generated by Gemini.",
        "• Included charts for category-wise spending, recurring expenses, and monthly deltas.",
        "• AI-generated personalized money-saving suggestions and risk flags.",
      ],
    },
  },
  {
    id: "rbac-system",
    category: "Full-Stack",
    title: "Role-Based Access Control (RBAC) System",
    subtitle: "Auth & Permissions Framework",
    descriptionShort:
      "Modular RBAC framework providing granular access controls, role hierarchy, and policy enforcement for web apps.",
    impact: ["Fine-grained permissions", "Reusable across apps"],
    features: [
      { label: "Role Hierarchies", icon: Shield },
      { label: "Policy Engine", icon: Code },
      { label: "Secure Auth", icon: Users },
    ],
    technologies: ["Node.js", "Prisma", "PostgreSQL", "JWT"],
    image: "/images/rbac-system/RBAC1.png",
    images: [
      "/images/rbac-system/RBAC1.png",
      "/images/rbac-system/RBAC2.png",
      "/images/rbac-system/RBAC3.png",
      "/images/rbac-system/RBAC4.png",
    ],
    github: "https://github.com/DivyangP2003/Role-Based-Access-Control-RBAC-",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "userManagement", label: "User Management" },
      { key: "roleManagement", label: "Role Management" },
      { key: "permissions", label: "Permissions" },
      { key: "dataManagement", label: "Data Management" },
      { key: "architecture", label: "Architecture" },
      { key: "security", label: "Security" },
      { key: "keyFeatures", label: "Key Features" },
    ],
    descriptionSections: {
      overview: [
        "A fully interactive Role-Based Access Control (RBAC) system built using React 18, Tailwind CSS, and localStorage persistence.",
        "Allows administrators to manage users, assign roles, edit permissions, and control feature-level access via a clean, responsive UI.",
        "Designed to model real-world enterprise permission systems with dynamic role inheritance, granular permissions, and secure access enforcement.",
      ],

      userManagement: [
        "• Add and manage users with predefined or custom roles.",
        "• Update user roles and toggle active/inactive status.",
        "• Alphabetically sorted user table for clean browsing.",
        "• Admin-exclusive abilities such as user deletion and drag-and-drop reordering.",
        "• Real-time UI sync with global state and cached data.",
      ],

      roleManagement: [
        "• System comes with predefined roles: Admin, Moderator, and User.",
        "• Each role contains layered permissions and inherited privileges.",
        "• Admins can edit permissions for any role with full system authority.",
        "• Moderators have controlled access — cannot modify Admin roles or delete users.",
        "• Role updates reflect instantly across the entire UI due to reactive state management.",
      ],

      permissions: [
        "• Fine-grained permission control organized by categories (user actions, role editing, access rights, etc.).",
        "• Dynamic permission inheritance ensures higher roles automatically gain lower-level permissions.",
        "• Secure feature gating — only permitted users can view or interact with certain UI components.",
        "• Full auditability through predictable and centralized permission logic.",
      ],

      dataManagement: [
        "• Implements a custom caching system using localStorage with automatic persistence.",
        "• First load pulls default seed data; subsequent loads use cached data for near-instant response.",
        "• Automatic cache invalidation when roles, users, or permissions change.",
        "• Optimized global state handling to ensure consistent UX across the app.",
      ],

      architecture: [
        "• Built with React 18 and Vite for fast development and instant HMR.",
        "• Tailwind CSS powers responsive and scalable UI components.",
        "• Component-driven architecture with modular separation: UsersTable, EditRoleModal, AddUserModal.",
        "• State and data stored in a centralized store (Data.js), enabling predictable data flow.",
        "• Local-only backend simulation to demonstrate full RBAC behavior in a frontend environment.",
      ],

      security: [
        "• Role-based route protection ensuring unauthorized users cannot access sensitive sections.",
        "• Permission-based gating that hides restricted UI elements.",
        "• Input validation for all user operations to prevent invalid role or permission assignments.",
        "• Secure and predictable state transitions reduce risk of broken access control.",
      ],

      keyFeatures: [
        "• Granular permission editing UI with toggles and grouped categories.",
        "• Dynamic role behavior — updates cascade to all users with that role.",
        "• Drag-and-drop user reordering (Admin only).",
        "• Visual indicators for active/inactive users.",
        "• Responsive, mobile-friendly dashboard layout.",
      ],
    },
  },

  {
    id: "cooksmart",
    category: "Full-Stack",
    title: "CookSmartAI",
    subtitle: "AI Culinary Platform",
    descriptionShort:
      "AI platform generating meal plans, recipes, food analysis, and nutrition insights.",
    impact: ["AutoNutrient Analysis", "AI Image Scanning"],
    features: [
      { label: "AI Recipe Generator", icon: Zap },
      { label: "Nutrition Inference", icon: Code },
      { label: "Meal Planning", icon: Users },
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "Gemini AI",
      "Hugging Face",
      "Pollination AI",
      "Cron-Jobs",
      "API",
      "Image Generation",
    ],
    image: "/images/cooksmart/landing_page_hero.png",
    images: [
      "/images/cooksmart/landing_page_hero.png",
      "/images/cooksmart/MyFavourites.png",
      "/images/cooksmart/TopRecipes_HomePage.png",
      "/images/cooksmart/Ai_ImageRegeneration.png",
      "/images/cooksmart/Ai_ImageScanner.png",
      "/images/cooksmart/Ai_MealPlannerPage.png",
      "/images/cooksmart/Ai_RecipeGenerated.png",
      "/images/cooksmart/AllinsightsNutrition.png",
      "/images/cooksmart/CalculatedNutrition.png",
      "/images/cooksmart/DetailedNutritionCard.png",
      "/images/cooksmart/ExploreWorldRecipe.png",
      "/images/cooksmart/GeneratedMealPlan.png",

      "/images/cooksmart/MealPlanAllinsights.png",

      "/images/cooksmart/NutritionCalculationPDF.png",
      "/images/cooksmart/NutritionCalculator.png",
      "/images/cooksmart/PDF_MealPlan.png",
      "/images/cooksmart/Scanned_Nutrition.png",
      "/images/cooksmart/Scanned_recipe.png",
      "/images/cooksmart/ShoppingList_Meal.png",
    ],
    liveDemo: "https://cook-smart-ai.vercel.app",
    github: "https://github.com/DivyangP2003/CookSmartAI",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "architecture", label: "Architecture" },
      { key: "recipeGenerator", label: "Recipe Generator" },
      { key: "mealPlanner", label: "Meal Planner" },
      { key: "nutritionAnalysis", label: "Nutrition Analysis" },
      { key: "imageScanning", label: "Image Scanning" },
      { key: "globalRecipeHub", label: "Global Recipe Hub" },
      { key: "favorites", label: "Favorites" },
      { key: "personalization", label: "Personalization" },
      { key: "aiModels", label: "AI Models" },
      { key: "backendArchitecture", label: "Backend Architecture" },
      { key: "cronJobs", label: "CRON Jobs" },
      { key: "uiux", label: "UI/UX Design" },
      { key: "security", label: "Security Measures" },
    ],
    descriptionSections: {
      overview: [
        "CookSmartAI is a modern AI-powered culinary platform that generates recipes, meal plans, and nutrition insights using multimodal AI.",
        "The system supports ingredient-based recipe creation, AI-generated dish images, personalized meal plans, nutrition breakdown, and a global recipe library.",
        "Designed as a full-stack Next.js application with AI-first workflows and seamless Supabase + Prisma integration.",
      ],

      recipeGenerator: [
        "• Generate complete recipes from ingredients or dish descriptions using Gemini AI.",
        "• Outputs include: title, description, ingredients, steps, cook/prep time, calories, and difficulty levels.",
        "• AI-generated dish image with instant 'Regenerate Image' option.",
        "• Save recipes to favorites or share via WhatsApp/Twitter/Email.",
        "• Handles multiple cuisines, diets, and local preferences.",
      ],

      mealPlanner: [
        "• AI-powered meal planning based on days, people, budget, and diet preferences.",
        "• Generates structured day-wise plans with meals, calories, macros, and timing.",
        "• Includes a smart generated shopping list with quantities.",
        "• Provides AI insights and dietary recommendations.",
        "• Plans can be saved, downloaded as PDF, or shared.",
      ],

      nutritionAnalysis: [
        "• Accepts ingredients or full recipe descriptions.",
        "• Produces deep nutritional breakdown: calories, macros, micros, glycemic load, and recommended nutrient intake.",
        "• AI-powered health recommendations and alternatives.",
        "• Supports historical tracking and downloadable nutrition reports.",
      ],

      imageScanning: [
        "• Upload food images to automatically generate recipes or nutritional breakdown.",
        "• Uses Gemini Vision + Pollination AI + Hugging Face for fallback model support.",
        "• Works for global cuisines and multi-ingredient dishes.",
        "• Reconstructs ingredients and cooking steps based purely on image.",
      ],

      globalRecipeHub: [
        "• A public recipe hub showcasing user-generated recipes.",
        "• Advanced filters: cuisine, diet, difficulty, prep time, calories, tags.",
        "• Weighted global rating system updated daily via CRON job.",
        "• Includes detailed recipe cards with AI images, macros, and instructions.",
      ],

      favorites: [
        "• Save recipes, meal plans, and nutrition scans to personal dashboard.",
        "• Manage saved items: delete, download, share, and revisit.",
        "• Uses Supabase to store user-specific history and preferences.",
        "• Fully protected behind Clerk authentication.",
      ],

      personalization: [
        "• Detects user’s location and timezone for region-aware recipe suggestions.",
        "• Adjusts meal timings and cultural cuisine suggestions.",
        "• AI adapts recipes according to user eating patterns and preferences.",
        "• Smart prompts ensure accuracy based on local units, ingredients, and availability.",
      ],

      aiModels: [
        "• Gemini API for recipe generation, nutrition analysis, image-to-recipe modeling.",
        "• Pollination AI for dish image generation and regeneration.",
        "• Hugging Face models used as fallback for robust reliability.",
        "• AI routes optimized using Next.js edge/server functions.",
      ],

      backendArchitecture: [
        "• Backend built using Next.js API Routes with route-based segmentation.",
        "• Supabase (PostgreSQL) manages all user data, favorites, recipe history, and rating data.",
        "• Prisma ORM provides schema migrations, typed queries, and relational modeling.",
        "• Image generation, recipe creation, and nutrition analysis routed through AI orchestration layer.",
        "• CRON jobs automate rating recalculations and scheduled tasks.",
      ],

      cronJobs: [
        "• Daily rating recalculation for global recipe ranking using weighted scoring.",
        "• Weekly cleanup/refinement tasks to maintain recipe quality.",
        "• Optional automated backups and recipe-tag processing.",
        "• All jobs powered via cron-job.org with webhook-based triggers.",
      ],

      uiux: [
        "• Fully responsive UI designed with Tailwind CSS and ShadCN components.",
        "• Optimized mobile-first experience for recipe browsing and meal planning.",
        "• Smooth transitions, skeleton loaders, and clean page layouts.",
        "• Accessible color palette and semantic UI structure.",
      ],

      security: [
        "• Authentication via Clerk with Google OAuth support.",
        "• Protected API routes and server-side validation.",
        "• Row-Level Security (RLS) enforced via Supabase.",
        "• Environment variable-based access control for all AI/cron endpoints.",
      ],
    },
  },

  {
    id: "pulsemeet",
    category: "Full-Stack",
    title: "PulseMeet",
    subtitle: "Telemedicine Platform",
    descriptionShort:
      "Secure telemedicine system with video consultation, billing, and RBAC.",
    impact: ["Encrypted video calls", "Full RBAC"],
    features: [
      { label: "Video Calls", icon: Users },
      { label: "RBAC System", icon: Code },
      { label: "Stripe Billing", icon: Zap },
    ],
    technologies: [
      "Next.js 14",
      "React",
      "Tailwind CSS",
      "Neon PostgreSQL",
      "Prisma",
      "Vonage Video API",
      "Server Actions",
      "Role-Based Access",
      "Stripe-like Subscriptions",
    ],
    image: "/images/pulsemeet/OnboardingPage.png",
    images: [
      "/images/pulsemeet/OnboardingPage.png",
      "/images/pulsemeet/Doctor_Dashboard.png",
      "/images/pulsemeet/Admin_ManageDoctors.png",
      "/images/pulsemeet/Admin_Payouts.png",
      "/images/pulsemeet/Admin_Verification.png",
      "/images/pulsemeet/Doctor_Dialog.png",
      "/images/pulsemeet/Doctor_Appointments.png",
      "/images/pulsemeet/Doctor_AvailabilitySetting.png",

      "/images/pulsemeet/Doctor_Form.png",
      "/images/pulsemeet/DoctorsListing.png",
      "/images/pulsemeet/FindYourDoctor.png",
      "/images/pulsemeet/MyAppointments.png",

      "/images/pulsemeet/Patient_DoctorDescription.png",
      "/images/pulsemeet/Patient_SlotBooking.png",
      "/images/pulsemeet/PatientDialog.png",
      "/images/pulsemeet/Prcing.png",
      "/images/pulsemeet/VideoCalling.png",
    ],
    liveDemo: "https://pulsemeet.vercel.app",
    github: "https://github.com/DivyangP2003/pulsemeet",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "authentication", label: "Authentication" },
      { key: "doctorOnboarding", label: "Doctor Onboarding" },
      { key: "scheduling", label: "Scheduling" },
      { key: "bookingSystem", label: "Booking System" },
      { key: "videoConsultations", label: "Video Consultations" },
      { key: "postConsultation", label: "Post-Consultation" },
      { key: "creditBilling", label: "Credit Billing" },
      { key: "doctorDashboard", label: "Doctor Dashboard" },
      { key: "adminPanel", label: "Admin Panel" },
      { key: "workflows", label: "Workflows" },
      { key: "creditPlans", label: "Credit Plans" },
      { key: "videoSecurity", label: "Video Security" },
      { key: "uiux", label: "UI/UX Design" },
    ],
    descriptionSections: {
      overview: [
        "PulseMeet is a full-stack telemedicine platform enabling secure doctor–patient consultations through encrypted video calls, real-time appointment scheduling, credit-based billing, and complete role-based access control.",
        "Built with Next.js 14 App Router, it integrates authentication, scheduling workflows, payment systems, doctor verification, and real-time video calling using Vonage.",
        "The platform supports multiple roles — Patient, Doctor, and Admin — each with dedicated dashboards and workflows.",
      ],

      authentication: [
        "• Secure authentication powered by Clerk with Google OAuth support.",
        "• Server-side session validation protects sensitive routes.",
        "• Role-based middleware directing users to the correct dashboard.",
        "• Admins receive elevated privileges, including doctor verification, payouts, and system management.",
      ],

      doctorOnboarding: [
        "• Doctors submit experience, credentials, specializations, licensing information, and availability.",
        "• Admins review, approve, or reject doctor applications through a verification queue.",
        "• Once approved, doctors become publicly discoverable and can accept appointments.",
      ],

      scheduling: [
        "• Doctors define availability via a flexible calendar-based UI.",
        "• Time slots are automatically locked when booked or overlapping.",
        "• Patients only see real-time available slots for each doctor.",
        "• Appointment cancellations automatically restore availability and credits.",
      ],

      bookingSystem: [
        "• Patients book appointments through a real-time slot picker.",
        "• Booking triggers automated session creation, credit deduction, and notifications.",
        "• Appointments maintain session metadata, timestamps, and audit logs.",
        "• Patients can cancel bookings before the start time to recover credits.",
      ],

      videoConsultations: [
        "• Secure, encrypted 1:1 video calls using Vonage Video API.",
        "• Auto-generated session tokens ensure only assigned doctor and patient can join.",
        "• In-browser controls: mute/unmute, toggle video, end session.",
        "• Fully responsive and dark-mode compatible call interface.",
        "• No third-party apps needed; works across browsers and devices.",
      ],

      postConsultation: [
        "• Doctors can add notes and session summaries after each consultation.",
        "• Notes are securely stored and linked to the appointment record.",
        "• Provides patients with a structured post-session follow-up history.",
      ],

      creditBilling: [
        "• Patients subscribe to pricing tiers that provide monthly credits.",
        "• Appointment bookings deduct credits depending on session cost.",
        "• Full credit transaction ledger records deductions, refunds, and purchases.",
        "• Subscription billing handled through Clerk’s management system.",
        "• Doctors earn credits from consultations, which can be requested as payouts.",
      ],

      doctorDashboard: [
        "• Doctors see upcoming sessions, join consultations, and track earnings.",
        "• Weekly and monthly credit earnings are visualized.",
        "• Withdrawal requests can be initiated and monitored.",
        "• Appointment summaries and patient history easily accessible.",
      ],

      adminPanel: [
        "• Approve or reject pending doctor applications.",
        "• Manage all users, doctors, appointments, and transactions.",
        "• Review and process payout requests from doctors.",
        "• Centralized visibility into the platform’s credit economy and logs.",
      ],

      workflows: [
        "• `checkUser()` – Syncs Clerk user with local DB and assigns role.",
        "• `bookAppointment()` – Deduct credits, lock slot, and create Vonage session.",
        "• `cancelAppointment()` – Restores credits and unlocks slot.",
        "• `processWithdrawal()` – Creates admin-verifiable payout request.",
        "• `assignCreditsOnSubscribe()` – Adds credits when subscription updates fire.",
        "• `verifyDoctor()` – Grants verification and platform visibility to doctors.",
      ],

      creditPlans: [
        "• Basic – 2 credits (Free): Suitable for one consultation.",
        "• Standard – 10 credits ($50): Suitable for ~5 consultations.",
        "• Premium – 24 credits ($100): Suitable for ~12 consultations.",
        "• Credit usage automatically updates ledger and availability status.",
      ],

      videoSecurity: [
        "• Unique encrypted video tokens generated server-side per appointment.",
        "• Only assigned doctor and patient can join sessions.",
        "• Session metadata logged for audits and analytics.",
        "• Secure handling of Vonage private key via server-side utilities.",
      ],

      uiux: [
        "• Fully responsive design using Tailwind CSS + ShadCN components.",
        "• Dark mode support across all dashboards and video call UI.",
        "• Seamless multi-role navigation with modern animations.",
        "• Intuitive patient and doctor flows with polished accessibility features.",
      ],
    },
  },

  {
    id: "drawai",
    category: "AI/ML",
    title: "DrawAI — Math Recognition",
    subtitle: "Canvas + TensorFlow.js",
    descriptionShort:
      "iPad-style math canvas with AI handwriting recognition and equation solving.",
    impact: ["Real-time parsing", "Math visualization"],
    features: [
      { label: "Canvas Drawing", icon: Code },
      { label: "AI Recognition", icon: Brain },
      { label: "Expression Parsing", icon: LineChart },
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Gemini AI",
      "Tesseract.js",
      "TensorFlow.js",
      "Math.js",
      "KaTeX",
      "Framer Motion",
      "html2canvas",
      "localStorage",
      "Canvas Rendering",
    ],
    image: "/images/drawai/AiDashboard.png",
    images: [
      "/images/drawai/AiDashboard.png",
      "/images/drawai/AiAanlysis.png",
      "/images/drawai/AiAnalysis2.png",
      "/images/drawai/AiCalendar.png",
      "/images/drawai/AiCllection.png",

      "/images/drawai/AiResult.png",
      "/images/drawai/AiSidebar.png",
      "/images/drawai/AiUpdate.png",
    ],
    liveDemo: "https://draw-ai-ecru.vercel.app/",
    github: "https://github.com/DivyangP2003/draw-ai",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "drawingTools", label: "Drawing Tools" },
      { key: "aiAnalysis", label: "AI Analysis" },
      { key: "smartTagging", label: "Smart Tagging" },
      { key: "noteManagement", label: "Note Management" },
      { key: "analyticsDashboard", label: "Analytics & Dashboard" },
      { key: "userExperience", label: "User Experience" },
      { key: "useCases", label: "Use Cases" },
      { key: "aiCapabilities", label: "AI Capabilities" },
      { key: "dataStorage", label: "Data Storage" },
      { key: "privacySecurity", label: "Privacy & Security" },
    ],
    descriptionSections: {
      overview: [
        "DrawAI is an AI-powered math and diagram recognition platform inspired by the iPad Math learning interface. Users can freely draw equations, graphs, physics diagrams, chemistry structures, or general sketches — and receive instant, streaming analysis from Google's Gemini 2.5 Flash model.",
        "The system provides a full digital note-taking experience with drawing tools, symbol palettes, smart tagging, analytics, note storage, calendar timelines, and AI-powered problem solving.",
        "It serves as a modern educational companion for students, teachers, engineers, and researchers.",
      ],

      drawingTools: [
        "• Freehand drawing with smooth, latency-free canvas (touch + mouse).",
        "• Shape tools for lines, rectangles, and circles with precision alignment.",
        "• 8-color palette with 6 adjustable brush thickness levels.",
        "• Line styles: solid, dashed, and filled shapes.",
        "• Eraser tool with clean pixel-level deletion.",
        "• Drag-and-drop math symbols (√, π, =, sin, cos, log, etc).",
        "• Text tool for adding typed annotations.",
        "• Clear canvas button with stat resets.",
        "• Canvas export using html2canvas and dom-to-image.",
      ],

      aiAnalysis: [
        "• Real-time AI-powered drawing interpretation using Gemini 2.5 Flash.",
        "• Understands mathematical equations, calculus expressions, graphs, trigonometry, geometry, physics diagrams, chemistry structures, biology illustrations, programming logic, and more.",
        "• Multi-domain reasoning with step-by-step explanations for problems.",
        "• Real-time streaming responses for a natural AI assistant feel.",
        "• Physics and chemistry diagrams interpreted with contextual labeling.",
        "• Smart auto-tagging classification into STEM, Humanities, Creative, Engineering, Environment, Research, and many more categories.",
      ],

      smartTagging: [
        "• Automatic tag generation based on AI understanding of the drawing.",
        "• Over 20 predefined categories including Mathematics, Physics, Chemistry, Biology, Computer Science, Astronomy, Geography, Art, Design, History, Economics, Literature, Engineering, Architecture, Environment, Research and Analytics.",
        "• Color-coded tags for easy filtering.",
        "• Tags saved as metadata with each note.",
      ],

      noteManagement: [
        "• Save drawings with titles, AI results, tags, and timestamps.",
        "• Notes sidebar enabling quick browsing and search.",
        "• Note detail panel showing drawing image, analysis, tags, creation time, and stats.",
        "• Calendar view to visualize notes by creation date.",
        "• Fully offline note storage using browser localStorage.",
      ],

      analyticsDashboard: [
        "• Track total strokes per drawing.",
        "• Time spent on each drawing session.",
        "• Color usage statistics (color frequency heuristics).",
        "• Historical drawing timeline.",
        "• Productivity chart using Recharts.",
      ],

      userExperience: [
        "• Seamless dark mode with smooth transitions.",
        "• Fully responsive for desktop + tablet (touch optimized).",
        "• Keyboard & gesture support for efficient workflow.",
        "• Toast notifications for real-time feedback.",
        "• Lightweight, fast UI powered by shadcn/ui and Tailwind 4.",
      ],

      useCases: [
        "• Students solving math homework or understanding concepts.",
        "• Teachers creating interactive classroom explanations.",
        "• Engineers sketching system diagrams or formulas.",
        "• Designers prototyping ideas visually.",
        "• Scientists documenting lab sketches.",
        "• Programmers outlining logic flow diagrams.",
        "• Anyone who needs instant AI help on handwritten content.",
      ],

      aiCapabilities: [
        "• Algebra, calculus, trigonometry problem solving with step-by-step solutions.",
        "• Graph interpretation including slope, intercepts, and transformations.",
        "• Physics diagrams: forces, circuits, motion diagrams, lenses, waves.",
        "• Chemistry structures: molecules, bonds, reaction mechanisms.",
        "• Biology diagrams: cells, anatomy sketches, ecosystem charts.",
        "• Computer science: flowcharts, logic gates, algorithm sketches.",
        "• Geometry: shapes, angles, transformations.",
        "• Concept explanations with detailed reasoning.",
      ],

      dataStorage: [
        "• All note data stored fully offline using localStorage.",
        "• Canvas snapshots saved as Base64 PNG.",
        "• No external data storage or servers.",
        "• Only analysis images are sent temporarily to Gemini API.",
        "• High-privacy design ensures no user data is logged or tracked.",
      ],

      privacySecurity: [
        "• All drawings stored locally — zero cloud storage by default.",
        "• Gemini API used securely over HTTPS.",
        "• No personal data tracking or telemetry.",
        "• Open-source transparency ensures full control.",
      ],
    },
  },

  {
    id: "travel-agent",
    category: "AI/ML",
    title: "Multimodal AI Travel Planning Agent",
    subtitle: "LLM + Geospatial AI",
    descriptionShort:
      "Autonomous travel planning agent using LLM reasoning with geo-data.",
    impact: ["Route-optimized planning", "Structured itinerary generation"],
    features: [
      { label: "LLM Reasoning", icon: Brain },
      { label: "Geospatial Lookup", icon: Globe },
      { label: "Day-wise Planning", icon: Calendar },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Gemini AI",
      "OpenAI",
      "Hugging Face Models",
      "LangChain",
      "Pydantic",
      "Requests",
      "Location Intelligence",
      "RAG Pipelines",
    ],
    image: "/images/travel-agent/TravelOverview.png",
    images: [
      "/images/travel-agent/TravelOverview.png",
      "/images/travel-agent/Travel1.png",
    ],
    github: "https://github.com/DivyangP2003/ai-agent-travel-planner",
    tabs: [
      { key: "overview", label: "Overview" },
      { key: "architecture", label: "Architecture" },
      { key: "agents", label: "AI Agents" },
      { key: "weather", label: "Weather Engine" },
      { key: "maps", label: "Maps Engine" },
      { key: "workflow", label: "Workflow" },
      { key: "finalReport", label: "Final Report" },
    ],
    descriptionSections: {
      overview: [
        "• Built a multimodal AI travel planning agent capable of generating realistic, location-aware itineraries for any city worldwide.",
        "• Uses Groq LLaMA 3.3 70B for high-speed reasoning, structured JSON generation, and auto-correction passes.",
        "• Supports real-time weather integration, geolocation, and interactive maps with accurate markers.",
        "• Orchestrates itinerary refinement through multiple validation layers ensuring realism, pacing, and accurate naming.",
      ],

      architecture: [
        "Orchestration Layer (Streamlit UI)",
        "• Manages user inputs, session flow, state management, and visualization.",
        "• Two-panel UI displays detailed itinerary + interactive map.",
        "",
        "LLM Planning Engine (Groq + LangChain)",
        "• Generates structured activity blocks in strict JSON format.",
        "• Ensures local realism, time accuracy, sequencing and cultural considerations.",
        "",
        "Data Integration Layer",
        "• Fetches real-time weather via WTTR API.",
        "• Performs geocoding with Nominatim + RateLimiter.",
        "• Uses Folium for marker rendering and global maps.",
        "",
        "Review Engine",
        "• Secondary LLM pass automatically fixes unrealistic flows, duplicate places, or inconsistent timings.",
      ],

      agents: [
        "🤖 Planning Agent",
        "• Generates first-pass itinerary based on interests & city metadata.",
        "• Ensures 3–5 key activities/day with food + culture balance.",
        "",
        "🤖 Correction Agent",
        "• Repairs unrealistic sequences (e.g., long-distance travel loops).",
        "• Ensures activity pacing follows local culture & realistic timings.",
        "",
        "🤖 Enhancement Agent",
        "• Adds cultural insights, travel tips, transportation suggestions.",
        "• Appends weather-aware notes to each day.",
      ],

      weather: [
        "• Uses lightweight WTTR REST API for weather snapshots.",
        "• Returns temperature + condition (e.g., Clear, Rain, Fog).",
        "• Weather appended inside daily notes.",
        "• Helps adjust itinerary flow (e.g., avoid outdoor activities on rainy days).",
      ],

      maps: [
        "• Folium-powered interactive daywise map visualization.",
        "• Accurate lat/long coordinates from Nominatim geocoder.",
        "• Auto-marker clustering with popups showing activity overview.",
        "• Color-coded markers by day for clearer navigation.",
      ],

      workflow: [
        "1️⃣ User enters city + trip duration + interests.",
        "2️⃣ LLM generates JSON itinerary following strict schema.",
        "3️⃣ Weather engine fetches live city weather.",
        "4️⃣ Correction agent validates and fixes itinerary.",
        "5️⃣ UI renders split view: activity timeline + geo-map.",
        "6️⃣ User downloads or explores itinerary interactively.",
      ],

      finalReport: [
        "• Provides a complete JSON-structured itinerary optimized for tourist flow.",
        "• Includes day-wise recommendations, meal suggestions, cultural notes, and real-time weather.",
        "• Map markers with descriptions help visualize the entire plan.",
        "• Suitable for integration into larger travel apps or chat-based planners.",
      ],
    },
  },
];
