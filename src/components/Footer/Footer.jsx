const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#333",
      color: "white",
      textAlign: "center",
      padding: "10px 0",
      fontSize: "14px",
    },
  };

  return (
    <footer style={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Your Company All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
