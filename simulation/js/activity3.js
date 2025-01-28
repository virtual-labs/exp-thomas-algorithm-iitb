function activity3() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Final Solution</h5>
        <p>Learning Objective: To find the values of X</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act3() {
    let temp_btn = (document.getElementById('temp-btn-3'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_x_inputs = get_matrix_html(3, 1, [
        [`<input id='a1-x-11' class='form-control' />`],
        [`<input id='a1-x-21' class='form-control' />`],
        [`<input id='a1-x-31' class='form-control' />`],
    ], 'inline-block', '25%');
    let btn_text = get_collapse_btn_text('Final Solution', 'tb3-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <div style='text-align: center;'>${get_matrix_html_with_title(3, 1, a_vector, 'a', 'inline-block', '15%')} &nbsp; ${get_matrix_html_with_title(3, 1, b_vector, 'b', 'inline-block', '15%')} &nbsp; ${get_matrix_html_with_title(3, 1, c_vector, 'c', 'inline-block', '15%')} &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, 'd', 'inline-block', '15%')}</div>
        <br><br>

        <h5>Calculate and enter the values of X</h5>
        <br>

        <div id='bs-inp-div' style='text-align: center;'><span style='font-size: 30px;'>X</span> = ${matrix_x_inputs}</div>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_bs();'  id='temp-btn-1234' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb3-box'), 150);
}
function verify_matrix_bs() {
    let btn = (document.getElementById('temp-btn-1234'));
    let inp_c;
    console.log(`matrix x =>`, mat_x);
    //for x
    for (let i = 0; i < 3; i++) {
        inp_c = document.getElementById(`a1-x-${i + 1}1`);
        if (!verify_values(parseFloat(inp_c.value), mat_x[i])) {
            alert(`incorrect value forx in at row ${i + 1}`);
            return;
        }
    }
    btn.remove();
    // render_bs_a_c();
    alert('You have successfully completed this experiment.');
    maindiv.innerHTML = `Experiment Compeleted Successfully.`;
}
//# sourceMappingURL=activity3.js.map