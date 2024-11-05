import { Harmonic } from "@/components/Harmonic/Harmonic";
import { Sticky } from "@/components/Sticky/Sticky";

const Anim1 = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
      <Sticky height="5000px" containerWidth="calc(50% - 80px)" top="100px">
        <Harmonic list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} type="qsap" />
      </Sticky>

      <Sticky height="5000px" containerWidth="calc(50% - 80px)" top="100px">
        <Harmonic list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} type="js" />
      </Sticky>
    </div>
  );
};

export default Anim1;
