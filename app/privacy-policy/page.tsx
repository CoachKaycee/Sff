import type { Metadata } from "next";
import { coolvetica } from "../fonts";

export const metadata: Metadata = {
  title: "Privacy Policy | SFF Call",
  description: "Privacy Policy for the SFF Call internal mobile application.",
};

const sections = [
  {
    title: "About This App",
    content: [
      "SFF Call is an internal mobile application used exclusively by authorised Speak Fluent French staff and coaches.",
      "The app is not open for public registration. Access is granted only through the internal Chatwoot system using pre-existing staff credentials.",
    ],
  },
  {
    title: "Information We Collect",
    content: [
      "Login credentials (email and password) are used solely to authenticate against the internal Chatwoot system. We do not store passwords on device beyond the active session.",
      "Push notification tokens are collected to deliver incoming call alerts to your device.",
      "Basic device information (device type, OS version) may be collected for diagnostic and crash-reporting purposes.",
    ],
  },
  {
    title: "Microphone Access",
    content: [
      "The app requests microphone permission exclusively to enable voice calls between coaches and students via the Voximplant calling infrastructure.",
      "Microphone access is only active during an ongoing call. It is never accessed in the background.",
      "Call audio is not recorded or stored by the app.",
    ],
  },
  {
    title: "Push Notifications",
    content: [
      "Push notifications are used to alert authorised users of incoming calls.",
      "Notification permissions can be managed at any time through your device settings. Disabling them will prevent incoming call alerts from appearing.",
    ],
  },
  {
    title: "Data Sharing",
    content: [
      "No personal data is sold or shared with third parties for marketing purposes.",
      "Data is shared only with internal infrastructure providers (Chatwoot, Voximplant) strictly to operate the calling service.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "Session tokens are stored locally on device and cleared upon logout.",
      "No call history or audio data is retained by the app.",
    ],
  },
  {
    title: "Security",
    content: [
      "All communications between the app and backend services are encrypted via TLS/SSL.",
      "Access to the app is restricted to authorised internal users only.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any questions regarding this Privacy Policy, contact the SFF technical team at: support@speakfluentfrench.com",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="w-full bg-background-secondary">
      <div className="container py-12 md:py-24">
        <h1 className={coolvetica.className + " text-3xl md:text-6xl text-text"}>
          Privacy <span className="text-primary">Policy</span>
        </h1>

        <p className="mt-2 text-text-gray text-sm md:text-base">
          SFF Call &mdash; Internal Application &bull; Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="mt-6 text-text text-md md:text-lg font-light leading-relaxed">
          This Privacy Policy describes how the SFF Call app handles information for its authorised internal users.
          By using the app, you agree to the practices described below.
        </p>

        <div className="mt-10 flex flex-col gap-10">
          {sections.map((section, index) => (
            <div key={section.title}>
              <h2 className="text-xl md:text-2xl font-semibold text-text">
                {index + 1}. {section.title}
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-md md:text-lg font-light text-text">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
