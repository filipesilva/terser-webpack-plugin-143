# terser-webpack-plugin-143

Repro for https://github.com/webpack-contrib/terser-webpack-plugin/issues/143.
This is a stripped down version of https://github.com/filipesilva/ng-speed-rebuild.

## Repro steps:

```
npm clone https://github.com/filipesilva/terser-webpack-plugin-143
cd terser-webpack-plugin-143
npm install
npm run ngc
npm ls terser terser-webpack-plugin
npm run benchmark
```

This will show you used versions of `terser` and `terser-webpack-plugin` and get you benchmark numbers when using `terser-webpack-plugin@2.2.2`.
The numbers I got were:
```
[benchmark] Benchmarking process over 5 iterations, with up to 5 retries.
[benchmark]   npm run webpack (at D:\sandbox\terser-webpack-plugin-143)
[benchmark] Process Stats
[benchmark]   Elapsed Time: 48539.20 ms (46150.00, 50034.00, 48728.00, 48844.00, 48940.00)
[benchmark]   Average Process usage: 3.85 process(es) (3.85, 3.85, 3.85, 3.85, 3.85)
[benchmark]   Peak Process usage: 5.00 process(es) (5.00, 5.00, 5.00, 5.00, 5.00)
[benchmark]   Average CPU usage: 29.55 % (28.12, 29.36, 30.42, 30.40, 29.41)
[benchmark]   Peak CPU usage: 170.62 % (165.60, 146.90, 182.90, 171.80, 185.90)
[benchmark]   Average Memory usage: 561.19 MB (572.04, 582.71, 542.59, 532.05, 576.56)
[benchmark]   Peak Memory usage: 1058.25 MB (1086.04, 1109.49, 1021.25, 996.13, 1078.35)
```

Disabling parallelism by changing `parallel: 2` to `parallel: false` in `webpack.config.js` shows the following numbers:
```
[benchmark] Benchmarking process over 5 iterations, with up to 5 retries.
[benchmark]   npm run webpack (at D:\sandbox\terser-webpack-plugin-143)
[benchmark] Process Stats
[benchmark]   Elapsed Time: 53565.20 ms (52965.00, 52738.00, 52954.00, 54683.00, 54486.00)
[benchmark]   Average Process usage: 2.95 process(es) (2.95, 2.95, 2.95, 2.95, 2.95)
[benchmark]   Peak Process usage: 3.00 process(es) (3.00, 3.00, 3.00, 3.00, 3.00)
[benchmark]   Average CPU usage: 18.65 % (18.02, 19.33, 19.56, 18.32, 18.05)
[benchmark]   Peak CPU usage: 137.50 % (121.90, 135.90, 161.00, 129.70, 139.00)
[benchmark]   Average Memory usage: 458.26 MB (452.28, 452.60, 459.27, 467.64, 459.52)
[benchmark]   Peak Memory usage: 789.43 MB (812.58, 748.88, 812.85, 821.44, 751.42)
```

Set `parallel: 2` again then follow these commands to get numbers for `terser-webpack-plugin@1.4.2`:
```
npm install terser-webpack-plugin@1.4.2 -DE
npm ls terser terser-webpack-plugin
npm run benchmark
```

The numbers I got were:
```
[benchmark] Benchmarking process over 5 iterations, with up to 5 retries.
[benchmark]   npm run webpack (at D:\sandbox\terser-webpack-plugin-143)
[benchmark] Process Stats
[benchmark]   Elapsed Time: 47165.40 ms (48127.00, 45810.00, 47589.00, 48426.00, 45875.00)
[benchmark]   Average Process usage: 4.14 process(es) (3.85, 3.85, 5.28, 3.87, 3.86)
[benchmark]   Peak Process usage: 5.60 process(es) (5.00, 5.00, 8.00, 5.00, 5.00)
[benchmark]   Average CPU usage: 28.86 % (29.80, 27.49, 29.44, 29.49, 28.06)
[benchmark]   Peak CPU usage: 156.60 % (151.60, 151.70, 168.70, 162.60, 148.40)
[benchmark]   Average Memory usage: 728.12 MB (619.87, 584.03, 1303.96, 569.29, 563.47)
[benchmark]   Peak Memory usage: 1495.66 MB (1251.39, 1172.98, 2721.88, 1175.47, 1156.58)
```

Disabling parallelism I got the following numbers:
```
[benchmark] Benchmarking process over 5 iterations, with up to 5 retries.
[benchmark]   npm run webpack (at D:\sandbox\terser-webpack-plugin-143)
[benchmark] Process Stats
[benchmark]   Elapsed Time: 54298.40 ms (55772.00, 52188.00, 55141.00, 52717.00, 55674.00)
[benchmark]   Average Process usage: 2.95 process(es) (2.95, 2.95, 2.95, 2.95, 2.95)
[benchmark]   Peak Process usage: 3.00 process(es) (3.00, 3.00, 3.00, 3.00, 3.00)
[benchmark]   Average CPU usage: 18.37 % (20.50, 17.37, 18.00, 16.96, 19.03)
[benchmark]   Peak CPU usage: 139.40 % (181.30, 115.70, 118.70, 117.30, 164.00)
[benchmark]   Average Memory usage: 458.09 MB (464.41, 456.70, 459.70, 461.76, 447.88)
[benchmark]   Peak Memory usage: 838.69 MB (840.65, 840.51, 843.47, 830.24, 838.60)
```

On all tests `npm ls terser terser-webpack-plugin` showed `terser@4.4.2` was in use.
