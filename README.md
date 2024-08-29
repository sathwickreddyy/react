# React



## Dependencies Step by Step 

### 1. Parcel (Bundler, HMR etc...)

- Parcel does following actions. 
> - Dev Build
> - Local Server
> - HMR - Hot Module Development // When we save in any file, it will automatically does the refresh in the browser.
>> - Uses File Watching Algorithm which is implemented in c++
> - Also caches the things for us for faster builds.
> - Does Image Optimization (Which is basically a costly operation while rendering web page i.e., image rendering is costly operation)
> - Minification
> - Bundles
> - Compresses the code and ships.
> - Consistent Hashing
> - Code Splitting
> - Differential Bundling
> - Diagnostic
> - Error Handling
> - Can also provides way to host on HTTPs with SSL certificates.
> - Tree Shaking - remove unused code.


![Why reach is faster, an Example with Web Bundler](./notes/zz_image_dump/example-of-react-faster.jpeg)