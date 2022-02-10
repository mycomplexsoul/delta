/**
 * ## To use autogrow textarea
 *
 * 1. wrap the <textarea> tag with a <div class="grow-wrap"> <textarea></textarea> </div>
 * 2. import /common/autogrow and when you show/toggle the textarea call the `autogrowSetup()` method
 * 3. verify
 */
function autogrowSetup({ componentWillBeVisible = true } = {}) {
    // Setup autogrow for textarea
    const handleInput = function handeInput() {
      this.parentNode.dataset.replicatedValue = this.value;
    };
    const grow = (handlerAction: string) => {
      const growers = document.querySelectorAll(".grow-wrap");
      
      growers.forEach((grower: any /*HTMLDivElement*/) => {
        const textarea = grower.querySelector("textarea");
  
        if (handlerAction === 'remove-it') {
          textarea.removeEventListener("input", handleInput.bind(textarea));
        } else {
          textarea.addEventListener("input", handleInput.bind(textarea));
        }
      });
    };

    if (componentWillBeVisible) {
      setTimeout(() => grow('add-it'), 200);
    } else {
      grow('remove-it');
    }
  }

export { autogrowSetup };