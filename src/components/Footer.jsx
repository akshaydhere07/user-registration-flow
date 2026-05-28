import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6">
      <ul className="flex items-center justify-center gap-6 text-sm text-gray-700">
        
        <li>
          <a
            href="#"
            className="hover:text-pink-500 transition"
          >
            Terms of Use
          </a>
        </li>

        <li>
          <a
            href="#"
            className="hover:text-pink-500 transition"
          >
            Contact Us
          </a>
        </li>

      </ul>
    </footer>
  );
}

export default Footer;