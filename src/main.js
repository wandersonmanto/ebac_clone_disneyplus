document.addEventListener('DOMContentLoaded', function() {

  const buttons = document.querySelectorAll('[data-tab-button]');

  buttons.forEach(currentButton => {
    currentButton.addEventListener('click', (botao) => {
      const abaTarget = botao.target.dataset.tabButton;
      displayNoneAbas();
      const aba = document.querySelector(`[data-tab-id=${abaTarget}]`)
      aba.classList.add('shows__list--is-active');
      removeButtonActive();
      botao.target.classList.add('shows__tabs__button--is-active');
      
    })
  })
});

function removeButtonActive() {
  const buttons = document.querySelectorAll('[data-tab-button]');

  buttons.forEach(currentButton => {
    currentButton.classList.remove('shows__tabs__button--is-active');
  });

}

function displayNoneAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  tabsContainer.forEach(currentTab => {
    currentTab.classList.remove('shows__list--is-active');
  })
}