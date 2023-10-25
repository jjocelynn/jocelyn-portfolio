import React, { useEffect, useState } from "react";

const StarsBg = () => {
  //find screen size and save it in a use state that changes whenever the screen size changes
  //use effect that changes everytime the screensize changes
  //depending on the screen size, create __ amount of dots
  //function that creates dots
  let dotArray = [];
  const [dotCount, setDotCount] = useState(0);
  window.addEventListener("resize", numDots);
  window.addEventListener("hashchange", numDots);

  //determine number of dots based on screen width and height, and reset dotArray
  //runs everytime the screen size changes or something is clicked
  function numDots() {
    let x = window.innerWidth;
    let y = document.body.scrollHeight;
    dotArray = [];
    setDotCount(Math.floor(((x / 2) * (y / 2)) / 2000));
    console.log("inside", x, y, dotCount);
  }

  useEffect(() => {
    console.log("useEffect");
  }, [dotCount]);

  return;
};

export default StarsBg;

/*
const [dotCount, setDotCount] = useState(0);
  const canvasRef = React.createRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let dotArray = [];

    function createDots(dotCount) {
      for (let i = 0; i < dotCount; i++) {
        let radius = Math.floor(Math.random() * 2 + 1);
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let xVelocity = (Math.random() * radius - 1) / 20;
        let yVelocity = (Math.random() * radius - 1) / 20;
        let fillColor = "white";
        let shadowBlur = 10;
        let shadowColor = "white";
        let globalAlpha = (Math.random() * 5 + 5) / 10;
        dotArray.push(
          new Dot(
            radius,
            x,
            y,
            xVelocity,
            yVelocity,
            fillColor,
            shadowBlur,
            shadowColor,
            globalAlpha
          )
        );
      }
      animate();
    }

    function Dot(r, x, y, xV, yV, fC, sB, sC, gA) {
      this.radius = r;
      this.x = x;
      this.y = y;
      this.xVelocity = xV;
      this.yVelocity = yV;
      this.fillColor = fC;
      this.shadowBlur = sB;
      this.shadowColor = sC;
      this.globalAlpha = gA;

      this.updateDots = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
          this.xVelocity = -this.xVelocity;
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
          this.yVelocity = -this.yVelocity;
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        this.drawDots();
      };

      this.drawDots = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.shadowBlur = this.shadowBlur;
        ctx.shadowColor = this.shadowColor;
        ctx.globalAlpha = this.globalAlpha;
        ctx.fillStyle = this.fillColor;
        ctx.fill();
      };
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < dotArray.length; i++) {
        dotArray[i].updateDots();
      }
    }

    function setValues() {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
      dotArray = [];
      setDotCount(
        Math.floor(((canvas.width / 2) * (canvas.height / 2)) / 2000)
      );
    }

    window.addEventListener("resize", setValues);
    window.addEventListener("click", setValues)
    setValues();
    createDots(dotCount);
    animate();

    return () => {
      window.removeEventListener("resize", setValues);
    };
  }, [dotCount]);

  return <canvas ref={canvasRef}/>;
*/
