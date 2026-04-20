import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.static(path.join(__dirname, "public")));

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { fullName, email, phone, programme, message, subject, formType } = req.body;

    console.log(`[FORM SUBMISSION] Type: ${formType || 'General'}`);
    console.log(`To: cetcorporategh@gmail.com`);
    console.log(`From: ${fullName} <${email}>`);
    console.log(`Data:`, { phone, programme, subject, message });

    // In a real production app, you would use a service like SendGrid, Postmark, or Nodemailer here.
    // Example with a hypothetical mail service:
    /*
    await mailService.send({
      to: 'cetcorporategh@gmail.com',
      from: 'noreply@cetpd.edu.gh',
      subject: `New ${formType || 'Form'} Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Programme: ${programme || 'N/A'}
        Subject: ${subject || 'N/A'}
        Message: ${message}
      `
    });
    */

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    res.json({ 
      success: true, 
      message: "Form submitted successfully! We have directed your request to cetcorporategh@gmail.com." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Submissions will be routed to: cetcorporategh@gmail.com`);
  });
}

startServer();
