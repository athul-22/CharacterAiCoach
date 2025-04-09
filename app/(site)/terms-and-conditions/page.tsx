"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TermsAndConditionsPage = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl xl:text-heading-1">
              Terms and Conditions for Stratedge.ai
            </h1>
            <span className="mb-10 inline-block text-sm font-medium text-black dark:text-white">
              Last Updated: 30/03/2025
            </span>
          </div>
          
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top bg-white dark:bg-blacksection rounded-lg p-7.5 md:p-10 lg:pt-[50px] lg:pb-[55px] lg:px-[60px] shadow-solid-8 dark:shadow-none terms-content"
          >
            <div className="prose max-w-none prose-lg dark:prose-invert">
              <p>
                These Terms and Conditions ("Agreement") govern the use of the Stratedge.ai web and mobile application (the "App"), operated by L4 Consulting LLC, a company registered in France with company number 949309553 ("Company," "we," "our," or "us"). By accessing or using the App, you ("User" or "you") agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not use the App. These Terms and Conditions form a legally binding agreement between you and L4 Consulting LLC.
              </p>

              <h3 className="text-black dark:text-white">1. Acceptance of Terms</h3>
              <p>
                By downloading, accessing, or using Stratedge.ai, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use the App. This Agreement will govern your use of the App and any content, services, or features provided therein.
              </p>

              <h3 className="text-black dark:text-white">2. App Description</h3>
              <p>
                Stratedge.ai is an AI-powered chat coaching service designed to support and improve employee well-being by providing personalized coaching, guided journaling, and reflective sessions based on AI-driven insights. The App aims to enhance mental health, well-being, and emotional resilience in the workplace.
              </p>
              <p>
                Please note that Stratedge.ai is not designed to replace or serve as a substitute for professional medical care, therapy, or counseling. The content provided by Stratedge.ai is intended for general wellness support and personal growth, not for the diagnosis or treatment of mental health conditions.
              </p>

              <h3 className="text-black dark:text-white">3. Not a Replacement for Professional Healthcare</h3>
              <p>
                <strong>Stratedge.ai is not intended to be a substitute for professional medical services, psychological therapy, or psychiatric care.</strong> While the App provides information, guidance, and reflective journaling prompts related to mental and emotional well-being, it does not offer professional medical or psychological services. The AI responses provided by the App are generated based on patterns and algorithms, not by licensed healthcare professionals.
              </p>
              <p>
                If you are experiencing any medical, mental health, or emotional issues, it is important to consult with a licensed healthcare provider or a mental health professional for proper evaluation, diagnosis, and treatment. Stratedge.ai is meant solely to complement professional care, not replace it. <strong>In case of a medical emergency or if you have any concerns about your mental health, please seek immediate assistance from a qualified medical or mental health provider.</strong>
              </p>

              <h3 className="text-black dark:text-white">4. Account Registration and Security</h3>
              <p>
                To access certain features of the App, you may be required to create an account and provide personal information such as your name, email address, and any other relevant data requested during the registration process. You agree to provide accurate, current, and complete information during the registration process and to update such information to ensure it remains accurate.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials, including your username and password. You are also responsible for all activities that occur under your account. If you believe that your account has been compromised or there is unauthorized use, you must promptly notify the Company.
              </p>

              <h3 className="text-black dark:text-white">5. Usage License</h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the App for your personal, non-commercial use, subject to compliance with these Terms and Conditions. This license allows you to download, install, and use the App on supported devices, solely for the purpose of utilizing the features and services offered by the App.
              </p>
              <p>You are not permitted to:</p>
              <ul>
                <li>Reverse-engineer, decompile, disassemble, attempt to derive the source code, or otherwise exploit the App, in whole or in part.</li>
                <li>Copy, modify, distribute, sell, lease, or otherwise transfer any part of the App or any related content.</li>
                <li>Use the App for any illegal or unauthorized purpose.</li>
              </ul>

              <h3 className="text-black dark:text-white">6. Prohibited Uses</h3>
              <p>
                You agree not to use the App for any unlawful, harmful, or malicious activities. Specifically, you shall not:
              </p>
              <ul>
                <li>Use the App to engage in any illegal activity or violate any applicable laws, rules, or regulations.</li>
                <li>Attempt to gain unauthorized access to the App, other accounts, computer systems, or networks connected to the App.</li>
                <li>Upload, post, or transmit any content that is offensive, abusive, defamatory, obscene, discriminatory, or violates the rights of others.</li>
                <li>Transmit viruses, malware, or other harmful code through the App.</li>
                <li>Interfere with the proper functioning of the App, such as through the use of bots, scripts, or other automated systems.</li>
              </ul>

              <h3 className="text-black dark:text-white">7. AI-Generated Content and Disclaimer</h3>
              <p>
                Stratedge.ai uses artificial intelligence to generate coaching responses and other content based on the input provided by users. While the AI is designed to provide supportive and insightful responses, <strong>the content provided by the AI is purely informational and should not be considered as professional advice.</strong>
              </p>
              <p>
                The AI-generated content is based on algorithms and patterns, and is not a substitute for professional counseling, therapy, or medical advice. <strong>By using the App, you acknowledge that you are solely responsible for how you apply the information provided by the App</strong> and understand that the AI responses may not always be accurate, reliable, or suitable for your specific needs.
              </p>
              <p>
                The Company is not responsible for any decisions, actions, or consequences that arise from your use of the App or reliance on its content. If you have specific needs regarding mental health, emotional well-being, or other personal concerns, you should seek advice from a qualified professional.
              </p>

              <h3 className="text-black dark:text-white">8. Data Privacy and Security</h3>
              <p>
                We take your privacy seriously and are committed to protecting your personal data. By using the App, you consent to the collection, use, and storage of your personal information in accordance with this Privacy Policy, which is incorporated into these Terms and Conditions.
              </p>

              <h4 className="text-black dark:text-white">8.1 Data Collection and Use</h4>
              <p>
                In order to provide the services offered by the App, we collect and process the following types of data:
              </p>
              <ul>
                <li><strong>Personal Information</strong>: Name, email address, and any other details you provide during registration or through interactions with the App.</li>
                <li><strong>User Content</strong>: Responses, journaling entries, and other data you input into the App during your coaching or reflective sessions.</li>
                <li><strong>Usage Data</strong>: Information about how you use the App, including device information, IP addresses, app interactions, and other usage metrics.</li>
              </ul>
              <p>
                The data you provide may be stored on Amazon Web Services (AWS) servers and processed by OpenAI's language models to generate personalized coaching responses. <strong>By using the App, you consent to the processing of your data by OpenAI and AWS, as described in this section.</strong>
              </p>

              <h4 className="text-black dark:text-white">8.2 Third-Party Services</h4>
              <p>
                The App uses third-party services, including OpenAI for AI processing and AWS for cloud data storage. These third-party services have their own privacy policies and terms of use. We encourage you to review their terms and policies:
              </p>
              <ul>
                <li>OpenAI: <a href="https://openai.com/policies/privacy-policy/" className="text-primary">https://openai.com/policies/privacy-policy/</a> - <a href="https://openai.com/policies/terms-of-use/" className="text-primary">https://openai.com/policies/terms-of-use/</a></li>
                <li>AWS: <a href="https://aws.amazon.com/fr/privacy/" className="text-primary">https://aws.amazon.com/fr/privacy/</a> - <a href="https://aws.amazon.com/fr/agreement/" className="text-primary">https://aws.amazon.com/fr/agreement/</a></li>
              </ul>
              <p>
                We do not control these third-party services and are not responsible for any issues arising from their use.
              </p>

              <h4 className="text-black dark:text-white">8.3 Data Security</h4>
              <p>
                We implement reasonable technical and organizational measures to protect your data from unauthorized access, loss, or destruction. However, please understand that no system is completely secure, and we cannot guarantee the absolute security of your data.
              </p>

              <h4 className="text-black dark:text-white">8.4 Your Data Rights</h4>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access your personal data.</li>
                <li>Correct any inaccuracies in your personal data.</li>
                <li>Request the deletion of your personal data, where applicable.</li>
                <li>Withdraw consent for certain data processing activities.</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:hello@stratedge.ai" className="text-primary">hello@stratedge.ai</a>.
              </p>

              <h3 className="text-black dark:text-white">9. Intellectual Property</h3>
              <p>
                All content, features, and functionality in the App, including but not limited to text, graphics, logos, designs, software, and any other proprietary information, are the property of L4 Consulting LLC and are protected by applicable intellectual property laws. You agree not to copy, modify, distribute, or reverse-engineer any part of the App or its content.
              </p>

              <h3 className="text-black dark:text-white">10. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by applicable law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from or related to the use or inability to use the App, including but not limited to any errors in AI-generated responses or other content.
              </p>
              <p>
                The Company's total liability to you for any claim, whether in contract, tort, or otherwise, will not exceed the amount you paid, if any, for accessing the App during the 12 months prior to the event giving rise to the claim.
              </p>

              <h3 className="text-black dark:text-white">11. Indemnification</h3>
              <p>
                You agree to indemnify, defend, and hold harmless L4 Consulting LLC, its affiliates, employees, agents, and licensors from and against any and all claims, losses, damages, liabilities, costs, or expenses (including reasonable legal fees) arising from your use of the App, any violation of these Terms and Conditions, or any infringement of third-party rights.
              </p>

              <h3 className="text-black dark:text-white">12. Termination</h3>
              <p>
                We reserve the right to suspend or terminate your access to the App at any time, without notice, for any reason, including if we believe you have violated these Terms and Conditions. Upon termination, all rights granted to you will immediately cease, and you must stop using the App.
              </p>

              <h3 className="text-black dark:text-white">13. Amendments</h3>
              <p>
                We may update or amend these Terms and Conditions at any time. Any changes will be posted in this section, and the effective date will be updated accordingly. Your continued use of the App after such changes constitutes your acceptance of the revised terms.
              </p>

              <h3 className="text-black dark:text-white">14. Governing Law and Dispute Resolution</h3>
              <p>
                These Terms and Conditions are governed by the laws of France. Any disputes arising from or related to these Terms and Conditions will be resolved through binding arbitration in France, conducted in French, and in accordance with applicable French arbitration rules.
              </p>

              <h3 className="text-black dark:text-white">15. Miscellaneous</h3>
              <ul>
                <li><strong>Entire Agreement</strong>: These Terms and Conditions, along with the Privacy Policy, constitute the entire agreement between you and the Company regarding the use of the App.</li>
                <li><strong>Severability</strong>: If any provision of these Terms and Conditions is found to be unenforceable, the remaining provisions will continue in full force and effect.</li>
                <li><strong>Waiver</strong>: The failure to enforce any provision of these Terms and Conditions does not constitute a waiver of that provision.</li>
              </ul>

              <p className="mt-10">
                For any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:hello@stratedge.ai" className="text-primary">hello@stratedge.ai</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;