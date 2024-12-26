const fs = require('fs');
const path = require('path');

const navScript = `
<style>
  #custom-nav-bar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
  }
  
  body {
    padding-top: 35px;
  }
</style>
<script>
function createNavBar() {
  if (!document.getElementById('custom-nav-bar-wrapper')) {
    // Shadow DOM Wrapper
    const wrapper = document.createElement('div');
    wrapper.id = 'custom-nav-bar-wrapper';
    const shadow = wrapper.attachShadow({ mode: 'open' }); // Shadow DOM 생성
    
    // Shadow DOM 스타일과 HTML
    shadow.innerHTML = \`
      <style>
        #custom-nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #282c34;
          color: #ffffff;
          padding: 10px 0;
          font-family: "Arial", sans-serif;
          font-size: 14px;
          text-align: center;
          z-index: 10000;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        #custom-nav-bar a {
          color: #61dafb;
          margin: 0 15px;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        #custom-nav-bar a:hover {
          color: #21a1f1;
          text-decoration: underline;
        }
      </style>
      <div id="custom-nav-bar">
        <a href="http://localhost:9322">테스트 메인 페이지</a>
        <a href="http://localhost:9323">테스트 상세 페이지</a>
        <a href="http://localhost:9324">테스트 실행 페이지</a>
      </div>
    \`;

    document.body.prepend(wrapper); // Shadow DOM Wrapper 삽입
  }
}

window.addEventListener('load', () => {
  createNavBar();

  const observer = new MutationObserver(() => {
    createNavBar();
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
</script>
`;

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('custom-nav-bar-wrapper')) {
    const injectedContent = content.replace(
        '</body>',
        `${navScript}\n</body>`
    );
    fs.writeFileSync(filePath, injectedContent, 'utf8');
    console.log(`Injected navigation script into: ${filePath}`);
  } else {
    console.log(`Navigation script already exists in: ${filePath}`);
  }
}

const allureReportPath = path.join(__dirname, '../allure-report', 'index.html');
const playwrightReportPath = path.join(__dirname, '../playwright-report', 'index.html');
const playwrightUiPath = path.join(__dirname, '../node_modules/playwright-core/lib/vite/traceViewer', 'uiMode.html');

injectScript(allureReportPath);
injectScript(playwrightReportPath);
injectScript(playwrightUiPath);