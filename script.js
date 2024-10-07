function openApp(app) {
    const appWindow = document.getElementById('appWindow');
    appWindow.style.display = 'block';

    if (app === 'calculator') {
        appWindow.innerHTML = `
            <div class="calculator">
                <input type="text" id="calcDisplay" readonly>
                <div class="calc-buttons">
                    <button onclick="calculate('1')">1</button>
                    <button onclick="calculate('2')">2</button>
                    <button onclick="calculate('3')">3</button>
                    <button onclick="calculate('+')">+</button>
                    <button onclick="calculate('4')">4</button>
                    <button onclick="calculate('5')">5</button>
                    <button onclick="calculate('6')">6</button>
                    <button onclick="calculate('-')">-</button>
                    <button onclick="calculate('7')">7</button>
                    <button onclick="calculate('8')">8</button>
                    <button onclick="calculate('9')">9</button>
                    <button onclick="calculate('*')">*</button>
                    <button onclick="calculate('0')">0</button>
                    <button onclick="calculate('=')">=</button>
                    <button onclick="calculate('/')">/</button>
                    <button onclick="clearCalc()">C</button>
                </div>
            </div>
        `;
    } else if (app === 'textEditor') {
        appWindow.innerHTML = `
            <div class="text-editor">
                <textarea id="textInput" rows="10" cols="50"></textarea>
                <br>
                <button onclick="saveText()">Save</button>
            </div>
        `;
    } else if (app === 'fileManager') {
        appWindow.innerHTML = `
            <div class="file-manager">
                <p>File System Simulation Coming Soon!</p>
            </div>
        `;
    }
}

let calcInput = '';

function calculate(value) {
    if (value === '=') {
        calcInput = eval(calcInput);
        document.getElementById('calcDisplay').value = calcInput;
    } else if (value === 'C') {
        calcInput = '';
        document.getElementById('calcDisplay').value = '';
    } else {
        calcInput += value;
        document.getElementById('calcDisplay').value = calcInput;
    }
}

function clearCalc() {
    calcInput = '';
    document.getElementById('calcDisplay').value = '';
}
