fetch("mock_data.json")
.then(function(response){
    return response.json();
})

.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = ``;
    let number = 1;
    let uk6 = 1;
    let uk7 = 2;
    let uk8 = 3;
    let uk9 = 4;
    let uk10 = 5;

    for(let product of products) {
        out += `
        <div class="col-xl-3 py-4">
            <div class="card shadow-lg">
              <img src="./images/shoe2.jpg" class="w-100 h-100" />
              <ul class="list-unstyled">
                <li><a data-bs-toggle="modal" data-bs-target="#modal${number}" href="#"
                >${product.name}</a></li>
                <li>RM ${product.price}</li>
              </ul>
            </div>
        </div>

        <!-- Modal -->

        <div
            class="modal fade modal-lg"
            id="modal${number}"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div id="addCart">
                    <div class="row">
                      <div class="col-lg-6">
                        <img
                          src="images/shoe2.jpg"
                          class="w-100 h-100 min-height-50 min-width-50"
                        />
                      </div>
                      <div class="col-lg-6 px-4 py-8 px-8">
                        <div class="top-50">
                          <p
                            class="font-size-40 font-weight-bold text-black mt-4"
                          >
                          ${product.name}
                          </p>
                          <p>RM ${product.price}</p>
                          <hr class="solid" />
                          <div>
                            <p>Choose UK sizes</p>
                            <div
                              class="btn-group mb-4"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="btnradio${uk6}"
                                autocomplete="off"
                                checked
                              />
                              <label
                                class="btn btn-outline-dark"
                                for="btnradio${uk6}"
                                >UK 6</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="btnradio${uk7}"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-dark"
                                for="btnradio${uk7}"
                                >UK 7</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="btnradio${uk8}"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-dark"
                                for="btnradio${uk8}"
                                >UK 8</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="btnradio${uk9}"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-dark"
                                for="btnradio${uk9}"
                                >UK 9</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="btnradio${uk10}"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-dark"
                                for="btnradio${uk10}"
                                >UK 10</label
                              >
                            </div>
                          </div>
                          <button
                            type="submit"
                            class="btn btn-block btn-warning"
                            id="addCart4"
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        `
        number++;
        uk6+=5;
        uk7+=5;
        uk8+=5;
        uk9+=5;
        uk10+=5;
    }
    placeholder.innerHTML = out;
})