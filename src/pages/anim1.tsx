import { Harmonic } from "@/components/Harmonic/Harmonic";
import { Sticky } from "@/components/Sticky/Sticky";

const Anim1 = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
      <p>qsap</p>
      <p>js</p>
      <p>css</p>

      <Sticky height="5000px" containerWidth="calc(33% - 80px)" top="100px">
        <Harmonic list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} type="qsap" />
      </Sticky>

      <Sticky height="5000px" containerWidth="calc(33% - 80px)" top="100px">
        <Harmonic list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} type="js" />
      </Sticky>

      <Sticky height="5000px" containerWidth="calc(33% - 80px)" top="100px">
        <Harmonic list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} type="css" />
      </Sticky>
    </div>
  );
};

export default Anim1;
