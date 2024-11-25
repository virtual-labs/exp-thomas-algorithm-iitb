function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Form the upper triangular matrix</h5>
        <p>Learning Objective: Find updated values for a, b, c and d matrix</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act2() {
    let temp_btn = (document.getElementById('temp-btn-2'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let a_inputs = get_matrix_html_with_title(3, 1, [
        [`<input id='a2-uta-11' class='form-control' />`],
        [`<input id='a2-uta-21' class='form-control' />`],
        [`<input id='a2-uta-31' class='form-control' />`],
    ], 'a', 'inline-block', '15%');
    let b_inputs = get_matrix_html_with_title(3, 1, [
        [`<input id='a2-utb-11' class='form-control' />`],
        [`<input id='a2-utb-21' class='form-control' />`],
        [`<input id='a2-utb-31' class='form-control' />`],
    ], 'b', 'inline-block', '15%');
    let c_inputs = get_matrix_html_with_title(3, 1, [
        [`<input id='a2-utc-11' class='form-control' />`],
        [`<input id='a2-utc-21' class='form-control' />`],
        [`<input id='a2-utc-31' class='form-control' />`],
    ], 'c', 'inline-block', '15%');
    let d_inputs = get_matrix_html_with_title(3, 1, [
        [`<input id='a2-utd-11' class='form-control' />`],
        [`<input id='a2-utd-21' class='form-control' />`],
        [`<input id='a2-utd-31' class='form-control' />`],
    ], 'd', 'inline-block', '15%');
    let btn_text = get_collapse_btn_text('Find Z', 'tb2-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div style='text-align: center;'>
            ${get_matrix_html_with_title(3, 1, a_vector, 'a', 'inline-block', '15%')} &nbsp; ${get_matrix_html_with_title(3, 1, b_vector, 'b', 'inline-block', '15%')} &nbsp; ${get_matrix_html_with_title(3, 1, c_vector, 'c', 'inline-block', '15%')} &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, 'd', 'inline-block', '15%')}
        </div>
        <br>
        <h5>After forming the upper triangluar matrix enter the updated values of a, b, c and d</h5>
        <br>
        <div id='ut-inp-div' style='text-align: center;'>${a_inputs} &nbsp; ${b_inputs} &nbsp; ${c_inputs} &nbsp; ${d_inputs}   </div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_ut();'  id='temp-btn-123' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    ut_a_c();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb2-box'), 150);
}
function ut_a_c() {
    a_vector = convert_2d_to_1d_vector(a_vector);
    b_vector = convert_2d_to_1d_vector(b_vector);
    c_vector = convert_2d_to_1d_vector(c_vector);
    mat_c = convert_2d_to_1d_vector(mat_c);
    mat_x = tdma(a_vector, b_vector, c_vector, mat_c);
    a_vector = [[0], [0], [0]];
    b_vector = convert_1d_to_2d_matrix(b_vector);
    c_vector = convert_1d_to_2d_matrix(c_vector);
    mat_c = convert_1d_to_2d_matrix(mat_c);
    for (let i = 0; i < 3; i++) {
        b_vector[i][0] = parseFloat(b_vector[i][0].toFixed(4));
        mat_c[i][0] = parseFloat(mat_c[i][0].toFixed(4));
    }
    console.log('a, b and c are updated ------------------------');
    console.log(`a => `, a_vector);
    console.log(`b => `, b_vector);
    console.log(`c => `, c_vector);
    console.log(`d => `, mat_c);
    console.log(`x => `, mat_x);
}
function verify_matrix_ut() {
    let btn = (document.getElementById('temp-btn-123'));
    let inp_a;
    let inp_b;
    let inp_c;
    let inp_d;
    console.log(`a => `, a_vector);
    console.log(`b => `, b_vector);
    console.log(`c => `, c_vector);
    console.log(`d => `, mat_c);
    //for a
    for (let i = 0; i < 3; i++) {
        inp_a = document.getElementById(`a2-uta-${i + 1}1`);
        if (!verify_values(parseFloat(inp_a.value), a_vector[i][0])) {
            alert(`incorrect value for a at row ${i + 1}`);
            return;
        }
    }
    //for b
    for (let i = 0; i < 3; i++) {
        inp_b = document.getElementById(`a2-utb-${i + 1}1`);
        if (!verify_values(parseFloat(inp_b.value), b_vector[i][0])) {
            alert(`incorrect value for b at row ${i + 1}`);
            return;
        }
    }
    //for c
    for (let i = 0; i < 3; i++) {
        inp_c = document.getElementById(`a2-utc-${i + 1}1`);
        if (!verify_values(parseFloat(inp_c.value), c_vector[i][0])) {
            alert(`incorrect value for c at row ${i + 1}`);
            return;
        }
    }
    //for d
    for (let i = 0; i < 3; i++) {
        inp_d = document.getElementById(`a2-utd-${i + 1}1`);
        if (!verify_values(parseFloat(inp_d.value), mat_c[i][0])) {
            alert(`incorrect value for d at row ${i + 1}`);
            return;
        }
    }
    alert('All entered values are correct.');
    btn.remove();
    render_ut_a_c();
    activity3();
}
function render_ut_a_c() {
    let div = (document.getElementById('ut-inp-div'));
    div.innerHTML = `
        ${get_matrix_html_with_title(3, 1, a_vector, 'a', 'inline-block', '16%')} &nbsp; 
        ${get_matrix_html_with_title(3, 1, b_vector, 'b', 'inline-block', '16%')} &nbsp; 
        ${get_matrix_html_with_title(3, 1, c_vector, 'c', 'inline-block', '16%')} &nbsp; 
        ${get_matrix_html_with_title(3, 1, mat_c, 'd', 'inline-block', '16%')}   
        `;
}
///activity2();
//# sourceMappingURL=activity2.js.map