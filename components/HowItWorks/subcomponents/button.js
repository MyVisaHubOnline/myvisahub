import Link from "next/link";

const Button = ({ text, href, self }) => {
  return (
    <div className="mt-40">
      <Link href={href} legacyBehavior>
        <a
          className="btn btn-default btn-white icon-arrow-right-white bg-red-500 color-white"
          rel="noopener noreferrer"
          target={self ? "_self" : "_blank"}
        >
          {text}
        </a>
      </Link>
    </div>
  );
};

export default Button;
