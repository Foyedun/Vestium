import React from "react";
import iphone from "../assets/iphone12.svg";
import square from "../assets/orange-square.svg";
import adroid from "../assets/android.svg";
import ios from "../assets/iosabout.svg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="bg-light lg:pt-[85px] lg:pb-[121px]">
      <div className="container grid lg:grid-cols-[40%,60%] items-center">
        {/* left hand side */}
        <div className="">
          <img src={iphone} alt="iphone" />
        </div>
        {/* right hand side */}
        <div>
          <div className="flex items-baseline  gap-[7px]">
            <h1 className="text-[40px] lg:text-[64px] font-extrabold text-primary">About Us</h1>
            <img src={square} alt="orange square" />
          </div>
          <h2>Smart Wear Virtual World</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt. hel
            mollitia animi, id est laborum et dolorum fuga. Et harum. Is tr
            quidem rerum facilis est et expedita distinctio. Nam I am libero
            tempore, cum soluta nobis est eligendi
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt. hel
            mollitia animi, id est laborum et dolorum fuga. Et harum. Is tr
            quidem rerum facilis est et expedita distinctio. Nam I am libero
            tempore, cum soluta nobis est eligendi
          </p>
          <Link>
            <img src={adroid} alt="" />
          </Link>
          <Link>
          <img src={ios} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
