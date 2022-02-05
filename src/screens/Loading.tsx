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
          transition: all 2s ease-in;
          width: 100vw;
          z-index: 1000;
        }

        .loading.hide {
          transform: translateX(110%);
        }

        .loading.resizing {
          transition: all 200ms ease-out;
        }

        .loader {
          border-top: 2px solid white;
          display: flex;
        }

        .balls {
          --duration: 2s;
          --rope-length: 100px;
          --rotation: 60deg;
          --rotation-small: 2deg;
          animation-duration: var(--duration);
          animation-iteration-count: infinite;
          background-color: mediumaquamarine;
          border-radius: 999px;
          position: relative;
          height: 4rem;
          top: var(--rope-length);
          transform-origin: center calc(-1 * var(--rope-length));
          width: 4rem;
        }

        .balls::before {
          background: white;
          display: inline-block;
          content: "";
          height: var(--rope-length);
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
          top: -100px;
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
            text-shadow: -1px 0 white, 1px 0 white, -2px -2px white,
              2px -2px white, -2px -4px white, 2px -4px white, -1px -6px white,
              1px -6px white, 0 -8px white;
          }
        }
      `}</style>
    </>
  );
});

Loading.displayName = "Loading";
export default Loading;
