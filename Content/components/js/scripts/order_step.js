{
  /************ 步驟切換 ************/
  function setSteps(step = 0, allSteps = 2) {
    if (allSteps < step) {
      console.log("setSteps(step, allStep); step 不得大於 allStep");
      return;
    }
    let nowStep = step;
    let progress_range = 100 / allSteps;
    let currentProgress = progress_range * nowStep;

    let steps = document.querySelectorAll(".step");
    let progress = document.querySelector(".bar");

    steps.forEach((step, idx) => {
      if (idx < nowStep) {
        step.classList.add("done");
      }
    });
    steps[nowStep].classList.add("active");
    progress.style.width = (currentProgress > 100 ? 100 : currentProgress) + "%";
  }
  
  // setSteps(0, 2); //setSteps(now_step, total_steps);

  /************ 步驟切換 ************/

  /************ 分頁效果參考 ************/
  let current_page = 1; // 當前頁
  let total_pages = 4; // 總頁數
  let page_num = document.querySelectorAll(".page_num"); // 數字按鈕
  let page_btns = document.querySelectorAll(".pagination .btn"); //操作按鈕

  page_btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let handler = this.dataset.handler;
      switch (handler) {
        case "begin":
          current_page = 1;
          break;
        case "end":
          current_page = total_pages;
          break;
        case "prev":
          current_page = current_page-- <= 1 ? 1 : current_page--;
          break;
        case "next":
          current_page = current_page++ >= total_pages ? total_pages : current_page++;
          break;
      }

      updatePagination();
    });
  });

  page_num.forEach((el) => {
    el.addEventListener("click", function () {
      current_page = this.dataset.page;
      updatePagination();
    });
  });

  function updatePagination() {
    /* tooggle active class */
    let target_page = [...page_num].find((el) => {
      return el.dataset.page == current_page;
    });
    page_num.forEach((el) => {
      el.classList.remove("active");
    });
    target_page.classList.add("active");

    /* tooggle unactive class */
    page_btns.forEach((btn) => {
      let target = btn.dataset.handler;
      if (target === "begin" || target === "prev") {
        btn.classList[current_page == 1 ? "add" : "remove"]("unactive");
      } else if (target === "end" || target === "next") {
        btn.classList[current_page == total_pages ? "add" : "remove"]("unactive");
      }
    });
    return current_page;
  }
  /************ 分頁效果參考  ************/
}
