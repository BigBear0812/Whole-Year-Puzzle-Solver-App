import { SplashScreen } from "@capacitor/splash-screen";
import { Solver } from '../../WholeYearPuzzleSolver/src/solver';

window.customElements.define(
  "solver-interface",
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: "open" });

      root.innerHTML = `
        <link rel="stylesheet" href="./css/bootstrap.min.css" />
        <div class="container-fluid">
          <div class="row bg-primary text-light">
            <div class="col">
              <h1 class="text-center">Capacitor</h1>
            </div>
          </div>
          <main>
            <div class="row">
              <div class="col">
                <p>
                  Solve for The Whole Year Puzzle for the specific date
                </p>
                <form>
                  <div class="mb-3">
                    <label for="month" class="form-label">Month</label>
                    <select class="form-select" id="month" aria-label="Month">
                      <option value="Jan">January</option>
                      <option value="Feb">February</option>
                      <option value="Mar">March</option>
                      <option value="Apr">April</option>
                      <option value="May">May</option>
                      <option value="Jun">June</option>
                      <option value="Jul">July</option>
                      <option value="Aug">August</option>
                      <option value="Sep">September</option>
                      <option value="Oct">October</option>
                      <option value="Nov">November</option>
                      <option value="Dec">December</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="day" class="form-label">Day</label>
                    <select class="form-select" id="day" aria-label="Day">
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="5">05</option>
                      <option value="6">06</option>
                      <option value="7">07</option>
                      <option value="8">08</option>
                      <option value="9">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </div>
                  <button type="button" id="solve" class="btn btn-primary">Solve</button>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div id="loader" class="spinner-border text-light d-none" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <pre id="output"></pre>
              </div>
            </div>
          </main>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      `;
    }

    connectedCallback() {
      const self = this;

      self.shadowRoot
        .querySelector("#solve")
        .addEventListener("click", (e) => {
          const month = self.shadowRoot.querySelector("#month").value;
          const day = parseInt(self.shadowRoot.querySelector("#day").value);
          const loader = self.shadowRoot.querySelector("#loader");
          loader.classList.remove("d-none");

          const solver = new Solver(month, day);
          solver.findSolutions();
          loader.classList.add("d-none");     
          let output = solver.createSolutionOutput();
          self.shadowRoot.querySelector("#output").textContent = output;
        });
    }
  }
);
