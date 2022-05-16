# MatLab Create Python Lib Package

https://www.mathworks.com/help/compiler_sdk/gs/create-a-python-application-with-matlab-code.html



https://www.mathworks.com/help/compiler/mcr-path-settings-for-run-time-deployment.html



Linux环境下安装 Matlab Runtime

测试通过的版本

​	Centos7 + runtime 9.9

测试出错版本

​    Ubuntu 20.04 + runtime 9.9



## FAQ：

1. 运行报错

   ```
   SystemError: fl:filesystem:InvalidArgument
   ```

   出错原因：所在路径包含中文字符

   https://www.mathworks.com/matlabcentral/answers/161989-fl-filesystem-invalidargument-error

   

2. Python 与 Matlab 程序之间的数据交换

   https://www.mathworks.com/help/matlab/matlab_external/use-matlab-arrays-in-python.html

   Pass Data to MATLAB from Python

   https://www.mathworks.com/help/matlab/matlab_external/pass-data-to-matlab-from-python.html

   MATLAB Arrays as Python Variables

   https://www.mathworks.com/help/matlab/matlab_external/matlab-arrays-as-python-variables.html

3. convert <class 'mlarray.double'> to <class 'ndarray'>

   https://www.mathworks.com/matlabcentral/answers/327455-convert-matlab-engine-outputs-to-numpy-arrays

   ```python
   import numpy as np
   import matlab as mat
   
   np_array = np.asarray(mat_array)
   ```

4. 每次重新编译之后都要重新执行setup.py进行安装



## reference：

Using MATLAB with Python

https://www.mathworks.com/products/matlab/matlab-and-python.html