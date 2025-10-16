import React from "react";

const GithubOrg: React.FC = () => {
  return (
    <section id="github" className="py-20 px-4 text-white text-center">
      <h2 className="text-2xl font-bold mb-4">GitHub Org</h2>
      <p>
        Observa un poco de mi perfil en GitHub:{" "}
        <a
          href="https://github.com/Yumesitahack"
          className="underline text-pink-200"
        >
          github.com/Yumesitahack
        </a>
      </p>
    </section>
  );
};

export default GithubOrg;
