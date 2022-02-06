import { ForwardedRef, forwardRef } from "react";

const Loading = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <div className="loading" ref={ref}>
        <div className="loader">
          <div className="balls"></div>
          <div className="balls"></div>
          <div className="balls"></div>
          <div className="balls"></div>
          <div className="balls"></div>
        </div>
        <p className="loading_text">LOADING</p>
      </div>
      <style jsx>{`
        .loading {
          align-items: center;
          background-color: var(--color-background);
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          left: 0;
          position: fixed;
          transition: transform 2s ease-in;
          width: 100vw;
          z-index: 1000;
        }

        .loading.hide {
          transform: translateX(110%);
        }

        .loading.resizing {
          transition: transform 200ms ease-out;
        }

        .loader {
          --duration: 2s;
          --rope-length: clamp(80px, 20vw, 150px);
          --rotation: 60deg;
          --rotation-small: 2deg;
          --size: clamp(2rem, 10vw, 4rem);
          display: flex;
          margin: var(--rope-length) 0;
        }

        .loader::before {
          background-color: var(--color-primary);
          content: "";
          height: 0.27rem;
          position: absolute;
          transform: translateY(-50%);
          width: 100%;
        }

        .balls {
          animation-duration: var(--duration);
          animation-iteration-count: infinite;
          background-color: mediumaquamarine;
          border-radius: 999px;
          position: relative;
          height: var(--size);
          top: var(--rope-length);
          transform-origin: center calc(-1 * var(--rope-length));
          width: var(--size);
        }

        .balls::before {
          background: var(--color-primary);
          display: inline-block;
          content: "";
          height: var(--rope-length);
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
          top: calc(-1 * var(--rope-length));
          width: 2px;
        }

        .balls:first-child,
        .balls:nth-child(2),
        .balls:last-child {
          animation-timing-function: ease-in;
        }

        .balls:nth-child(3),
        .balls:nth-last-child(2) {
          animation-delay: calc(var(--duration) / 4);
          animation-timing-function: ease-out;
        }

        .balls:first-child {
          animation-name: first_ball;
        }

        .balls:nth-child(2) {
          animation-name: second_ball;
        }

        .balls:nth-child(3) {
          animation-name: middle_ball;
        }

        .balls:nth-last-child(2) {
          animation-name: second_last_ball;
        }

        .balls:last-child {
          animation-name: last_ball;
        }

        .loading_text {
          animation: 2s enlarge_text infinite ease-in-out alternate;
          backdrop-filter: blur(0);
          color: var(--color-text);
          font-family: sans-serif;
          font-size: min(15vw, 4rem);
          font-weight: bolder;
          text-transform: uppercase;
        }

        @keyframes first_ball {
          0%,
          50%,
          100% {
            transform: rotate(var(--rotation));
          }
          25%,
          75% {
            animation-timing-function: ease-out;
            transform: rotate(0);
          }
        }

        @keyframes second_ball {
          0%,
          100% {
            transform: rotate(var(--rotation));
          }
          25%,
          75% {
            animation-timing-function: ease-out;
            transform: rotate(0);
          }
          50% {
            animation-timing-function: ease-in;
            transform: rotate(calc(-1 * var(--rotation-small)));
          }
        }

        @keyframes middle_ball {
          0%,
          50%,
          100% {
            transform: rotate(0);
          }
          25% {
            animation-timing-function: ease-in;
            transform: rotate(calc(-1 * var(--rotation-small)));
          }
          75% {
            animation-timing-function: ease-in;
            transform: rotate(var(--rotation-small));
          }
        }

        @keyframes second_last_ball {
          0%,
          50%,
          100% {
            transform: rotate(0);
          }
          25% {
            animation-timing-function: ease-in;
            transform: rotate(calc(-1 * var(--rotation)));
          }
          75% {
            animation-timing-function: ease-in;
            transform: rotate(var(--rotation-small));
          }
        }

        @keyframes last_ball {
          0%,
          50%,
          100% {
            transform: rotate(calc(-1 * var(--rotation)));
          }
          25%,
          75% {
            animation-timing-function: ease-out;
            transform: rotate(0);
          }
        }

        @keyframes enlarge_text {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(15px) scale(1.2);
            text-shadow: -1px 0 var(--color-primary), 1px 0 var(--color-primary),
              -2px -2px var(--color-primary), 2px -2px var(--color-primary),
              -2px -4px var(--color-primary), 2px -4px var(--color-primary),
              -1px -6px var(--color-primary), 1px -6px var(--color-primary),
              0 -8px var(--color-primary);
          }
        }

        @media only screen and (max-width: 349px) {
          .loader {
            display: none;
          }
        }

        @media only screen and (orientation: landscape) and (max-height: 450px) {
          .loader {
            display: none;
          }
        }
      `}</style>
    </>
  );
});

Loading.displayName = "Loading";
export default Loading;
