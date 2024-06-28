import styled from "../styles/animations-text.module.scss";

const Animations = () => {
  const BtnEffect = (e: any) => {
    const btn = e.target;

    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    const color = `#${Math.ceil(Math.random() * 0xffffff).toString(16)}`;

    const circle = document.createElement("span");
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.style.borderColor = color;

    btn.appendChild(circle);
    circle.classList.add("click");

    setTimeout(() => {
      circle.remove();
    }, 2000);
  };

  return (
    <div className={styled.animBlock}>
      <h3>Анимации на css и js</h3>

      <div className={styled.animationFadeOut}>
        <p>G</p>
        <p>o</p>
        <p>o</p>
        <p>d</p>
        <p>b</p>
        <p>y</p>
        <p>e</p>
      </div>

      <div className={styled.animationFadeIn}>
        <p>H</p>
        <p>e</p>
        <p>l</p>
        <p>l</p>
        <p>o</p>
      </div>

      <div className={styled.pulse} onClick={BtnEffect}>
        button
      </div>

      <div className={styled.cutText}>
        <h1 className="title">
          <span>Hi, nice</span>
          <span>to see</span>
          <span>you here</span>
        </h1>

        <h2 className="title">
          <span>This is</span>
          <span>a long</span>
          <span>sub title</span>
        </h2>
      </div>

      <div className={styled.animationClamp}>
        <h1 data-shadow="dang!">dang!</h1>
      </div>
    </div>
  );
};

export default Animations;
