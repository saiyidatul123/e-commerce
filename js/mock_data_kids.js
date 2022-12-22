fetch("mock_data.json")
.then(function(response){
    return response.json();
})

.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = ``;
    let number = 1;
    let uk1 = 1;
    let uk2 = 2;
    let uk3 = 3;
    let uk4 = 4;
    let uk5 = 5;

    for(let product of products) {
        out += `
        <div class="col-xl-3 py-4">
            <div class="card shadow-lg">
              <img src="./images/kids-shoes.png" class="shoes-img" />
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
                                id="btnradio${uk1}"
                                autocomplete="off"
                                checked
                              />
                              <label
                                class="btn btn-outline-dark"
                                for="btnradio${uk1}"
                                >UK 1</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="btnradio${uk2}"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-dark"
                                for="btnradio${uk2}"
                                >UK 2</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="btnradio${uk3}"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-dark"
                                for="btnradio${uk3}"
                                >UK 3</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="btnradio${uk4}"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-dark"
                                for="btnradio${uk4}"
                                >UK 4</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="btnradio${uk5}"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-dark"
                                for="btnradio${uk5}"
                                >UK 5</label
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
        uk1+=5;
        uk2+=5;
        uk3+=5;
        uk4+=5;
        uk5+=5;
    }
    placeholder.innerHTML = out;
})