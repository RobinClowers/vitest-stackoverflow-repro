import "./App.css";

function App() {
  return new Array(50).fill(0).map((_, i) => (
    <div key={i} className="chakra-popover__popper css-c0ozv6">
      {i}
      <section
        className="chakra-popover__content css-50nrg0"
        id="popover-content-:r2e:"
        role="dialog"
        tabIndex="-1"
      >
        <div className="chakra-stack css-nyurif" tabIndex="-1">
          <div className="chakra-accordion css-8atqhb">
            <p className="chakra-text css-1f651k8">Filters</p>
            <div className="chakra-accordion__item css-1wt2fjj">
              <button
                aria-controls="accordion-panel-:r2f:"
                aria-expanded="false"
                className="chakra-accordion__button css-w8zrff"
                data-index="0"
                id="accordion-button-:r2f:"
                type="button"
              >
                <p className="chakra-text css-16t3pfv">Statement type</p>
              </button>
              <div
                aria-labelledby="accordion-button-:r2f:"
                className="chakra-accordion__panel css-714jgw"
                hidden=""
                id="accordion-panel-:r2f:"
                role="region"
              >
                <div className="chakra-stack css-enj3l8">
                  <label className="chakra-checkbox css-1yqjqxm">
                    <input
                      aria-label="select"
                      className="chakra-checkbox__input"
                      name="select"
                      type="checkbox"
                      value=""
                    />
                    <span
                      aria-hidden="true"
                      className="chakra-checkbox__control css-16djmb"
                    />
                    <span className="chakra-checkbox__label css-vdtghi">
                      <p className="chakra-text css-ghzaw6">SELECT</p>
                    </span>
                  </label>
                  <label className="chakra-checkbox css-1yqjqxm">
                    <input
                      aria-label="create"
                      className="chakra-checkbox__input"
                      name="create"
                      type="checkbox"
                      value=""
                    />
                    <span
                      aria-hidden="true"
                      className="chakra-checkbox__control css-16djmb"
                    />
                    <span className="chakra-checkbox__label css-vdtghi">
                      <p className="chakra-text css-ghzaw6">CREATE</p>
                    </span>
                  </label>
                  <label className="chakra-checkbox css-1yqjqxm">
                    <input
                      aria-label="drop"
                      className="chakra-checkbox__input"
                      name="drop"
                      type="checkbox"
                      value=""
                    />
                    <span
                      aria-hidden="true"
                      className="chakra-checkbox__control css-16djmb"
                    />
                    <span className="chakra-checkbox__label css-vdtghi">
                      <p className="chakra-text css-ghzaw6">DROP</p>
                    </span>
                  </label>
                  <label className="chakra-checkbox css-1yqjqxm">
                    <input
                      aria-label="alter"
                      className="chakra-checkbox__input"
                      name="alter"
                      type="checkbox"
                      value=""
                    />
                    <span
                      aria-hidden="true"
                      className="chakra-checkbox__control css-16djmb"
                    />
                    <span className="chakra-checkbox__label css-vdtghi">
                      <p className="chakra-text css-ghzaw6">ALTER</p>
                    </span>
                  </label>
                  <label className="chakra-checkbox css-1yqjqxm">
                    <input
                      aria-label="subscribe"
                      className="chakra-checkbox__input"
                      name="subscribe"
                      type="checkbox"
                      value=""
                    />
                    <span
                      aria-hidden="true"
                      className="chakra-checkbox__control css-16djmb"
                    />
                    <span className="chakra-checkbox__label css-vdtghi">
                      <p className="chakra-text css-ghzaw6">EXPLAIN</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="chakra-accordion__item css-1wt2fjj">
              <button
                aria-controls="accordion-panel-:r2g:"
                aria-expanded="false"
                className="chakra-accordion__button css-w8zrff"
                data-index="1"
                id="accordion-button-:r2g:"
                type="button"
              >
                <p className="chakra-text css-16t3pfv">Status</p>
              </button>
              <div
                aria-labelledby="accordion-button-:r2g:"
                className="chakra-accordion__panel css-714jgw"
                hidden=""
                id="accordion-panel-:r2g:"
                role="region"
              >
                <div className="chakra-stack css-enj3l8">
                  <label className="chakra-checkbox css-1yqjqxm">
                    <input
                      aria-label="running"
                      className="chakra-checkbox__input"
                      name="running"
                      type="checkbox"
                      value=""
                    />
                    <span
                      aria-hidden="true"
                      className="chakra-checkbox__control css-16djmb"
                    />
                    <span className="chakra-checkbox__label css-vdtghi">
                      <div className="css-pmvv0v">Running</div>
                    </span>
                  </label>
                  <label className="chakra-checkbox css-1yqjqxm">
                    <input
                      aria-label="error"
                      className="chakra-checkbox__input"
                      name="error"
                      type="checkbox"
                      value=""
                    />
                    <span
                      aria-hidden="true"
                      className="chakra-checkbox__control css-16djmb"
                    />
                    <span className="chakra-checkbox__label css-vdtghi">
                      <div className="css-17dix4f">Error</div>
                    </span>
                  </label>
                  <label className="chakra-checkbox css-1yqjqxm">
                    <input
                      aria-label="success"
                      className="chakra-checkbox__input"
                      name="success"
                      type="checkbox"
                      value=""
                    />
                    <span
                      aria-hidden="true"
                      className="chakra-checkbox__control css-16djmb"
                    />
                    <span className="chakra-checkbox__label css-vdtghi">
                      <div className="css-1vjc0bo">Success</div>
                    </span>
                  </label>
                  <label className="chakra-checkbox css-1yqjqxm">
                    <input
                      aria-label="canceled"
                      className="chakra-checkbox__input"
                      name="canceled"
                      type="checkbox"
                      value=""
                    />
                    <span
                      aria-hidden="true"
                      className="chakra-checkbox__control css-16djmb"
                    />
                    <span className="chakra-checkbox__label css-vdtghi">
                      <div className="css-ulgtwy">Canceled</div>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="chakra-accordion__item css-1wt2fjj">
              <button
                aria-controls="accordion-panel-:r2h:"
                aria-expanded="false"
                className="chakra-accordion__button css-w8zrff"
                data-index="2"
                id="accordion-button-:r2h:"
                type="button"
              >
                <p className="chakra-text css-16t3pfv">Duration</p>
              </button>
              <div
                aria-labelledby="accordion-button-:r2h:"
                className="chakra-accordion__panel css-714jgw"
                hidden=""
                id="accordion-panel-:r2h:"
                role="region"
              >
                <div
                  className="chakra-stack chakra-form-control css-1vvkgiu"
                  role="group"
                >
                  <div className="chakra-stack css-1igwmid">
                    <input
                      className="chakra-input css-11a4r9x"
                      id="field-:r2i:"
                      name="durationRange.minDuration"
                      placeholder="10ms"
                      type="number"
                    />
                    <p className="chakra-text css-15spf7u">to</p>
                    <input
                      className="chakra-input css-11a4r9x"
                      id="field-:r2i:"
                      name="durationRange.maxDuration"
                      placeholder="1000ms"
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="chakra-accordion__item css-1wt2fjj">
              <button
                aria-controls="accordion-panel-:r2j:"
                aria-expanded="false"
                className="chakra-accordion__button css-w8zrff"
                data-index="3"
                id="accordion-button-:r2j:"
                type="button"
              >
                <p className="chakra-text css-16t3pfv">Session ID</p>
              </button>
              <div
                aria-labelledby="accordion-button-:r2j:"
                className="chakra-accordion__panel css-714jgw"
                hidden=""
                id="accordion-panel-:r2j:"
                role="region"
              >
                <div
                  className="chakra-stack chakra-form-control css-1vvkgiu"
                  role="group"
                >
                  <input
                    className="chakra-input css-11a4r9x"
                    id="field-:r2k:"
                    name="sessionId"
                    placeholder="Enter session ID"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="chakra-accordion__item css-1wt2fjj">
              <button
                aria-controls="accordion-panel-:r2l:"
                aria-expanded="false"
                className="chakra-accordion__button css-w8zrff"
                data-index="4"
                id="accordion-button-:r2l:"
                type="button"
              >
                <p className="chakra-text css-16t3pfv">Application name</p>
              </button>
              <div
                aria-labelledby="accordion-button-:r2l:"
                className="chakra-accordion__panel css-714jgw"
                hidden=""
                id="accordion-panel-:r2l:"
                role="region"
              >
                <div
                  className="chakra-stack chakra-form-control css-1vvkgiu"
                  role="group"
                >
                  <input
                    className="chakra-input css-11a4r9x"
                    id="field-:r2m:"
                    name="applicationName"
                    placeholder="Enter application name"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="chakra-accordion__item css-1wt2fjj">
              <button
                aria-controls="accordion-panel-:r2n:"
                aria-expanded="false"
                className="chakra-accordion__button css-w8zrff"
                data-index="5"
                id="accordion-button-:r2n:"
                type="button"
              >
                <p className="chakra-text css-16t3pfv">Query ID</p>
              </button>
              <div
                aria-labelledby="accordion-button-:r2n:"
                className="chakra-accordion__panel css-714jgw"
                hidden=""
                id="accordion-panel-:r2n:"
                role="region"
              >
                <div
                  className="chakra-stack chakra-form-control css-1vvkgiu"
                  role="group"
                >
                  <input
                    className="chakra-input css-11a4r9x"
                    id="field-:r2o:"
                    name="executionId"
                    placeholder="Enter query ID"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="chakra-stack css-1ouqnch">
              <label className="chakra-checkbox css-12yxxd5">
                <input
                  aria-label="Show Console introspection"
                  className="chakra-checkbox__input"
                  type="checkbox"
                  value=""
                />
                <span
                  aria-hidden="true"
                  className="chakra-checkbox__control css-16djmb"
                />
                <span className="chakra-checkbox__label css-vdtghi">
                  <p className="chakra-text css-hqenu9">
                    Show Console introspection
                  </p>
                </span>
              </label>
            </div>
          </div>
          <div className="chakra-stack css-q8akt1">
            <button className="chakra-button css-1i0se4t" type="button">
              Reset filters
            </button>
            <button className="chakra-button css-1452sry" type="button">
              Apply filters
            </button>
          </div>
        </div>
      </section>
    </div>
  ));
}

export default App;
