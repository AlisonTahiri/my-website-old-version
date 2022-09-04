import React from "react";
import Link from "next/link";

import { BsChevronDoubleUp } from "react-icons/bs";

const ToTop = () => {
  return (
    <Link href="/">
      <div data-aos="fade-up" data-aos-offset="-100" data-aos-delay={200}>
        <div className="p-2 border-2 rounded-full cursor-pointer border-primary">
          <BsChevronDoubleUp className="text-3xl transition-colors duration-300 md:text-4xl text-primary hover:text-hv" />
        </div>
      </div>
    </Link>
  );
};

export default ToTop;
