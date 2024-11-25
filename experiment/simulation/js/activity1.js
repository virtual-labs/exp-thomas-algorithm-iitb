let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">System of Linear Equations: Thomas Algorithm</h4>

        <div class="fs-16px">
        <h5>Triple Diagonal Elements</h5>
        <p>Learning Objective: Enter Triple Diagonal Elements</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
// let mat1 = get_matrix_html(3, 1, [[1], [2], [3]], 'inline-block');
// console.log(mat1);
//html for matrix inputs
let a_inputs = get_matrix_html_with_title(3, 1, [
    [`<input id='a1-uta-11' class='form-control' />`],
    [`<input id='a1-uta-21' class='form-control' />`],
    [`<input id='a1-uta-31' class='form-control' />`],
], 'a', 'inline-block', '15%');
let b_inputs = get_matrix_html_with_title(3, 1, [
    [`<input id='a1-utb-11' class='form-control' />`],
    [`<input id='a1-utb-21' class='form-control' />`],
    [`<input id='a1-utb-31' class='form-control' />`],
], 'b', 'inline-block', '15%');
let c_inputs = get_matrix_html_with_title(3, 1, [
    [`<input id='a1-utc-11' class='form-control' />`],
    [`<input id='a1-utc-21' class='form-control' />`],
    [`<input id='a1-utc-31' class='form-control' />`],
], 'c', 'inline-block', '15%');
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('a, b and c vectors', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div style='text-align: center;'>
            <p><span style='font-size: 25px;'>$$ A * X \\ = \\ d $$</span></p>
        </div>
        <br>

        <div style='text-align: center;'>${get_matrix_html_with_title(3, 3, mat_a, 'A', 'inline-block', '40%')} &nbsp; <span style='font-size: 30px;'>* X</span> &nbsp; = &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, 'd', 'inline-block', '20%')}</div>
        <br>

        <h5>Enter the values of vector a, b, c by entering </h5> <br>

        <div id='piv-inp-div' style='text-align: center;'>${a_inputs} &nbsp; ${b_inputs} &nbsp; ${c_inputs} &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, 'd', 'inline-block', '15%')}   </div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_a_c();'  id='temp-btn-12' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    // find_l();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb1-box'), 150);
}
function verify_matrix_a_c() {
    let btn = (document.getElementById('temp-btn-12'));
    let inp_a;
    let inp_b;
    let inp_c;
    console.log(`a => `, a_vector);
    console.log(`b => `, b_vector);
    console.log(`c => `, c_vector);
    //for a
    for (let i = 0; i < 3; i++) {
        inp_a = document.getElementById(`a1-uta-${i + 1}1`);
        if (!verify_values(parseFloat(inp_a.value), a_vector[i][0])) {
            alert(`incorrect value for a at row ${i + 1}`);
            return;
        }
    }
    //for b
    for (let i = 0; i < 3; i++) {
        inp_b = document.getElementById(`a1-utb-${i + 1}1`);
        if (!verify_values(parseFloat(inp_b.value), b_vector[i][0])) {
            alert(`incorrect value for b at row ${i + 1}`);
            return;
        }
    }
    //for c
    for (let i = 0; i < 3; i++) {
        inp_c = document.getElementById(`a1-utc-${i + 1}1`);
        if (!verify_values(parseFloat(inp_c.value), c_vector[i][0])) {
            alert(`incorrect value for c at row ${i + 1}`);
            return;
        }
    }
    alert('You have enter correct value.');
    btn.remove();
    render_a_b_c();
    activity2();
}
function find_l() {
    mat_l = lower_L(mat_a);
    for (let i = 0; i < mat_l.length; i++) {
        for (let j = 0; j < mat_l[0].length; j++) {
            if (mat_l[i][j] != 0) {
                mat_l[i][j] = parseFloat(mat_l[i][j].toFixed(4));
            }
        }
    }
}
function render_a_b_c() {
    let div = (document.getElementById('piv-inp-div'));
    div.innerHTML = `${get_matrix_html_with_title(3, 1, a_vector, 'a', 'inline-block', '15%')} &nbsp; ${get_matrix_html_with_title(3, 1, b_vector, 'b', 'inline-block', '15%')} &nbsp; ${get_matrix_html_with_title(3, 1, c_vector, 'c', 'inline-block', '15%')} &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, 'd', 'inline-block', '15%')}`;
}
activity1();
//# sourceMappingURL=activity1.js.map