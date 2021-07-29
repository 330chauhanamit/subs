const Loading = (props) => {
  return (
    <div>
      <div className="bg-dark vh-100 d-flex justify-content-center align-items-center text-white-50">
        <div className="col-lg-1 col-3">
          <div className="w-50">
            <svg
              viewBox="0 0 38 38"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
            >
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)" strokeWidth="2">
                  <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.5s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="text-align-center">
          <h3>Loading....</h3>
        </div>
      </div>
    </div>
  );
};

export default Loading;
