import footer from "../../data/footer";

const FooterTop = () => {
  return (
    <div className="pb-5 border-bottom border-secondary">
      {/* Logo */}
      <h2
        className="mb-2"
        style={{
          fontFamily: "Cormorant Garamond, serif",
          color: "#ffffff",
          fontSize: "2.2rem",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        GLOBEX
      </h2>

      <div
        className="mb-4"
        style={{
          color: "#f4c430",
          letterSpacing: "6px",
          fontSize: ".9rem",
          textTransform: "uppercase",
        }}
      >
        INTERNATIONAL
      </div>

      <p
        style={{
          color: "#b8b8b8",
          lineHeight: "1.9",
          maxWidth: "420px",
          fontSize: "1rem",
        }}
      >
        {footer.company.description}
      </p>
    </div>
  );
};

export default FooterTop;