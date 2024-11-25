function tdma(a, b, c, d) {
    let x = [];
    let q, i;
    let n = b.length - 1;
    for (i = 1; i <= n; i++) {
        q = a[i] / b[i - 1];
        b[i] = b[i] - c[i - 1] * q;
        d[i] = d[i] - d[i - 1] * q;
    }
    x[n] = d[n] / b[n];
    // x[n] = q;
    for (i = n - 1; i >= 0; i--) {
        x[i] = (d[i] - c[i] * x[i + 1]) / b[i];
    }
    return x;
}
//# sourceMappingURL=thomas.js.map