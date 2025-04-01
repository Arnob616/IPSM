![Screenshot 2025-04-01 122009](https://github.com/user-attachments/assets/11ca13a9-980c-46b2-9c7b-53313132c6a7)

#CivicSafe
- Integrated Public Safety & Service Management System

CivicSafe is a modern, AI-powered public safety and service management system that enables users to report incidents efficiently. Using AI, it processes reports, validates their relevance, and provides tracking capabilities to enhance civic engagement and public safety.

🚀 Features

User Incident Reporting: Users can submit reports with images, and AI will auto-fill report titles and descriptions.

AI-Powered Processing: Google Gemini API verifies if the report is relevant to public safety before submission.

Automated Report Categorization: AI-generated titles and descriptions streamline the reporting process.

Report Tracking: Users receive a tracking ID to monitor the status of their reports.

Interactive Maps: Mapbox integration for location-based reporting and visualization.

Modern UI/UX: Built with ShadCN for an elegant and user-friendly design.

🛠 Tech Stack

Framework: Next.js

Language: TypeScript

Database: NeonDB (PostgreSQL)

ORM: Prisma

AI Processing: Google Gemini API

Maps & Geolocation: Mapbox

Validation: Zod

UI Components: ShadCN

📦 Installation

To set up CivicSafe on your local machine:

Clone the repository:

git clone https://github.com/your-repo/civicsafe.git
cd civicsafe

Install dependencies:

npm install

Set up environment variables:
Create a .env file and add the necessary API keys:

NEXT_PUBLIC_MAPBOX_KEY=your_mapbox_key
GEMINI_API_KEY=your_gemini_api_key
DATABASE_URL=your_neon_db_url

Run database migrations:

npx prisma migrate dev

Start the development server:

npm run dev

🔥 Usage

Submit a Report: Users can upload images and provide details of incidents.

AI Processing: The AI validates the relevance of the report to public safety.

Track Reports: Users receive a tracking ID to follow up on the incident.

Admin Dashboard: Authorities can manage and respond to reports effectively.

📖 Contributing

We welcome contributions! Feel free to submit issues or pull requests to improve CivicSafe.

📜 License

This project is licensed under the MIT License.

💡 Empowering citizens for a safer community with AI-driven public safety management!

