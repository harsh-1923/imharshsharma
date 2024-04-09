import React, { useRef } from "react";
import "./ContextSystem.css";
import Context from "../../../Components/Context/Context";

const Text = () => {
  return (
    <p style={{ outline: "1px solid red" }}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolore
      debitis enim maiores sed veniam quaerat quo voluptatem, saepe harum.
    </p>
  );
};

const ContextSystem = () => {
  const parentRef = useRef(null);
  return (
    <div ref={parentRef} className="context-sys-exp">
      Lorem ipsum dolor sit amet adipisicing{" "}
      <Context
        text={
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos doloredebitis enim maiores sed veniam quaerat quo voluptatem, saepe harum."
        }
        parent={parentRef}
      >
        consectetur
      </Context>{" "}
      elit. Soluta tenetur{" "}
      <Context
        text={
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos doloredebitis enim maiores sed veniam quaerat quo voluptatem, saepe harum."
        }
        parent={parentRef}
      >
        accusantium
      </Context>{" "}
      asperiores consequatur vel ut, iure fuga cumque =
      <Context
        text={
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos doloredebitis enim maiores sed veniam quaerat quo voluptatem, saepe harum."
        }
        parent={parentRef}
      >
        consectetur
      </Context>{" "}
      iusto laborum! Rem sint eius voluptatem facilis temporibus dignissimos,
      soluta porro! Facere ducimus repellat quidem illum velit neque et soluta,
      eveniet praesentium quisquam consectetur molestiae voluptatibus, facilis
      perspiciatis ab reprehenderit? Modi, dolore asperiores. Eius magni,
      itaque, aliquam aut ducimus doloremque tenetur maxime rerum nemo
      laudantium impedit. Perspiciatis ipsum inventore quo corrupti accusamus ad
      porro amet nam asperiores dicta tempore, aliquid quibusdam praesentium
      officia{" "}
      <Context
        text={
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos doloredebitis enim maiores sed veniam quaerat quo voluptatem, saepe harum."
        }
        parent={parentRef}
      >
        consectetur
      </Context>{" "}
      voluptas quasi doloremque assumenda blanditiis ratione vel, facilis esse
      consectetur error. Totam magnam enim dolorem dolorum praesentium
      cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Quibusdam, quisquam deserunt aliquam tempora molestias consequatur
      corrupti pariatur debitis placeat iste sed necessitatibus ipsum
      consectetur enim architecto quis nostrum. Repellendus, obcaecati numquam
      molestiae in consectetur ex nihil optio laudantium doloremque? Hic illo
      vitae magni assumenda nihil et. Harum temporibus, obcaecati corrupti
      doloremque sunt cumque libero? Molestiae ipsa unde dolorem, est
      perspiciatis labore voluptatem animi error? Voluptates ullam provident
      voluptate corrupti, saepe tempore praesentium temporibus mollitia quis
      reprehenderit quaerat libero sapiente. Cupiditate deleniti deserunt modi
      excepturi facilis praesentium aliquam facere dignissimos corrupti, minima
      eum magni quam delectus labore eligendi officiis, asperiores alias iure
      dicta aperiam. Accusamus odio quia qui amet laborum molestiae, nam dicta
      reiciendis! Iure at, exercitationem laboriosam praesentium quo dolore
      aliquid quam illum alias porro? Tempore eos error ipsam quod iusto
      recusandae nesciunt ad laborum libero atque neque ea labore voluptate nemo
      suscipit rerum, obcaecati possimus optio vitae velit ex. Cupiditate rem
      aperiam vero quam omnis incidunt asperiores sequi? Laudantium, mollitia
      incidunt. Quidem perspiciatis et minima nostrum labore ratione, non
      commodi odit atque, sapiente nobis delectus harum inventore cumque modi
      nihil quos est eum! Ut aut pariatur animi, hic vitae nostrum earum!
      Dolores, ea inventore? Placeat architecto rem ut modi.
    </div>
  );
};

export default ContextSystem;
