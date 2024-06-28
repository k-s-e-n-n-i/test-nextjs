import { useEffect } from "react";
import Image from "next/image";
import Parallax from "parallax-js";

import styled from "../styles/parallax.module.scss";

import Img1 from "../images/1.jpg";
import Img2 from "../images/2.jpg";
import Img3 from "../images/3.jpg";

const PageParallax = () => {
  useEffect(() => {
    const scene = document.getElementById("scene");

    if (scene) {
      const parallax = new Parallax(scene, {
        selector: ".layer",
      });
    }
  }, []);

  return (
    <div>
      <div id="container" className="container">
        <div id="scene" className={styled.scene}>
          <div className="layer" data-depth="1.00">
            <Image src={Img1} alt="" className={styled.image} />
          </div>
          <div className="layer" data-depth="0.50">
            <Image src={Img2} alt="" className={styled.image} />
          </div>
          <div className="layer" data-depth="0">
            <Image src={Img3} alt="" className={styled.image} />
          </div>
        </div>
      </div>

      <div>
        {/* <div id="container" class="container">
    <div id="scene" class="scene">
      <div data-depth="1.00">
        <div style="background-color: red;">1</div>
      </div>
      <div data-depth="0.80">
        <div style="background-color: violet;">1</div>
      </div>
      <div data-depth="0.60">
        <div style="background-color: blue;">1</div>
      </div>
      <div data-depth="0.40">
        <div style="background-color: green;">1</div>
      </div>
      <div data-depth="0.20">
        <div style="background-color: yellow;">1</div>
      </div>
      <div data-depth="0.00">
        <div style="background-color: pink">1</div>
      </div>
    </div>
  </div>
  
  <div id="container" class="container">
    <img class="aspect" src="images/layer2.png">
    <div id="scene" class="scene border fill" data-pointer-events="true">
      <div class="expand-width" data-depth="1.00"><button>layer[6]</button></div>
      <div class="expand-width" data-depth="0.80"><button>layer[5]</button></div>
      <div class="expand-width" data-depth="0.60"><button>layer[4]</button></div>
      <div class="expand-width" data-depth="0.40"><button>layer[3]</button></div>
      <div class="expand-width" data-depth="0.20"><button>layer[2]</button></div>
      <div class="expand-width" data-depth="0.00"><button>layer[1]</button></div>
    </div>
  </div> */}

        {/* <div id="container" class="container">
    <div id="scene" data-hover-only="true" data-relative-input="true" class="scene border">
      <div data-depth="1.00"><img src="images/layer1.png"></div>
      <div data-depth="0.80"><img src="images/layer2.png"></div>
      <div data-depth="0.60"><img src="images/layer3.png"></div>
      <div data-depth="0.40"><img src="images/layer4.png"></div>
      <div data-depth="0.20"><img src="images/layer5.png"></div>
      <div data-depth="0.00"><img src="images/layer6.png"></div>
    </div>
  </div> */}

        {/* <div id="container" class="container">
    <div id="scene" class="scene">
      <div data-depth="1.00">
        1
      </div>
      <div data-depth-x="0.80" data-depth-y="-1.80">
        2
      </div>
      <div data-depth-x="-0.60" data-depth-y="-0.20">
        3
      </div>
      <div data-depth="0.40" data-depth-y="-0.30">
        4
      </div>
      <div data-depth="0.20">
        5
      </div>
      <div data-depth="0.00">
        6
      </div>
    </div>
  </div> */}

        {/* <script src="./parallax.js"></script>
  <script>
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
  </script> */}

        {/* <button id="deleteme">Delete me!</button>
  
  <div id="container" class="container">
    <div id="scene" class="scene">
      <div data-depth="1.00"><img src="images/layer1.png"></div>
      <div data-depth="0.80"><img src="images/layer2.png"></div>
      <div data-depth="0.60"><img src="images/layer3.png"></div>
      <div data-depth="0.40"><img src="images/layer4.png"></div>
      <div data-depth="0.20"><img src="images/layer5.png"></div>
      <div data-depth="0.00"><img src="images/layer6.png"></div>
    </div>
  </div>
  
  <script src="./parallax.js"></script>
  <script>
  
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
  
    document.getElementById('deleteme').onclick = function () {
      parallax.destroy();
      parallax = null;
  
      this.onclick = null;
      this.style.display = 'none';
    };
  
  </script> */}

        {/* <div id="container" class="container container--offset">
    <div id="scene" class="scene border">
      <div data-depth="1.00"><img src="images/layer1.png"></div>
      <div data-depth="0.80"><img src="images/layer2.png"></div>
      <div data-depth="0.60"><img src="images/layer3.png"></div>
      <div data-depth="0.40"><img src="images/layer4.png"></div>
      <div data-depth="0.20"><img src="images/layer5.png"></div>
      <div data-depth="0.00"><img src="images/layer6.png"></div>
    </div>
    <br>
    <input type="checkbox" id="relative" checked>
    <label for="relative">relativeInput</label>
    <input type="checkbox" id="clip">
    <label for="clip">clipRelativeInput</label>
  </div>
  
  <script src="./parallax.js"></script>
  <script>
  
      var scene = document.getElementById('scene');
    var clipCheckbox = document.getElementById('clip');
    var relativeCheckbox = document.getElementById('relative');
  
      var parallax = new Parallax(scene, {
      relativeInput: relativeCheckbox.checked,
      clipRelativeInput: clipCheckbox.checked
    });
  
    relativeCheckbox.addEventListener('change', function (event) {
      parallax.relativeInput = relativeCheckbox.checked;
    });
  
    clipCheckbox.addEventListener('change', function (event) {
      parallax.clipRelativeInput = clipCheckbox.checked;
    });
  
  </script> */}

        {/* <script src="./parallax.js"></script>
  <script>
  
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene, {
      selector: '.layer'
    });
  
  </script> */}
      </div>
    </div>
  );
};

export default PageParallax;
