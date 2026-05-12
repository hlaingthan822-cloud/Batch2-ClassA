"use client";
import Image from "next/image";

import GetStarted from "../Components/GetStarted";
import LearnMore from "../Components/LearnMore";

export default function Home() {
  const handleGetStartedClick = () => {
    alert("Get Started button clicked!");
  };

  const handleLearnMoreClick = () => {
    alert("Learn More button clicked!");
  };

  const styles = {
    main: {
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      color: "white",
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      overflow: "hidden",
    },
    headerContainer: {
      position: "relative",
      zIndex: 20,
      width: "100%",
    },
    header: {
      display: "flex",
      alignItems: "center",
      padding: "40px 60px",
    },
    logoGroup: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    logo: {
      width: "42px",
      height: "auto",
    },
    title: {
      color:"#FEEBE7",
      
      fontSize: "32px",
      fontWeight: "700",
      margin: 0,
      lineHeight: 1,
    },
    contentArea: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "center",
      position: "relative",
      zIndex: 8,
      
      paddingTop: "100px",
      paddingBottom: "50px",
    },
    heroText: {
      fontSize: "42px",
      fontWeight: "700",

      
      transform: "translateY(50px)",

      marginBottom: "110px",
      lineHeight: "1.2",
      letterSpacing: "-0.5px",
    },
    description: {
      maxWidth: "750px",
      fontSize: "20px",
      fontWeight: "400",
  
      marginBottom: "130px",
      lineHeight: "1.6",
      opacity: "0.9",
    },
    buttonGroup: {
      display: "flex",
      gap: "90px",
    },

    getStartedBtn: {
      backgroundColor: "#8CC63F",
      color: "black",
      padding: "16px 45px",
      borderRadius: "12px",
      fontSize: "18px",
      fontWeight: "700",
      border: "none",
      cursor: "pointer",
    },
    learnMoreBtn: {
      backgroundColor: "white",
      color: "#4A3228",
      padding: "16px 45px",
      borderRadius: "12px",
      fontSize: "18px",
      fontWeight: "700",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <main style={styles.main}>
      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/plant.webp"
          alt="Green sprout in soil"
          fill
          quality={100}
          priority
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(255, 255, 0, 0.25), rgba(0, 80, 0, 0.4),rgba(0, 80, 0, 0.4),rgba(0, 80, 0, 0.4),rgba(0, 80, 0, 0.4),rgba(0, 80, 0, 0.4),))",
          }}
        />
      </div>

      <div style={styles.headerContainer}>
        <div style={styles.header}>
          <div style={styles.logoGroup}>
            <img src="/logo.png" alt="Eco Logo" style={styles.logo} />
            <h1 style={styles.title}>Eco-Tech</h1>
          </div>
        </div>
      </div>

      <div style={styles.contentArea}>
        <h2 style={styles.heroText}>Save the Planet with Smart Energy</h2>
        <p style={styles.description}>
          Our AI-powered system reduces your electricity bill by 40% <br />
          while lowering the carbon footprints.
        </p>

        <div style={styles.buttonGroup}>
          {}
          <GetStarted
            onClick={handleGetStartedClick}
            style={styles.getStartedBtn}
          />
          <LearnMore
            onClick={handleLearnMoreClick}
            style={styles.learnMoreBtn}
          />
        </div>
      </div>
    </main>
  );
}
