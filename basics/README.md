# React



## Dependencies Step by Step 

### 1. Parcel (Bundler, HMR etc...)

- Parcel does following actions. 

<div style="display: flex;">

  <!-- First Column -->
  <div style="flex: 1; padding: 10px;">
    <blockquote>
      <ul>
        <li>Dev Build</li>
        <li>Local Server</li>
        <li>HMR - Hot Module Development // When we save in any file, it will automatically refresh in the browser.
          <ul>
            <li>Uses File Watching Algorithm which is implemented in C++</li>
          </ul>
        </li>
        <li>Also caches the things for us for faster builds.</li>
        <li>Does Image Optimization (Which is basically a costly operation while rendering web page i.e., image rendering is costly operation)</li>
        <li>Minification</li>
        <li>Bundles</li>
        <li>Compresses the code and ships.</li>
        <li>Consistent Hashing</li>
        <li>Code Splitting</li>
        <li>Differential Bundling</li>
        <li>Diagnostic</li>
        <li>Error Handling</li>
        <li>Can also provide a way to host on HTTPs with SSL certificates.</li>
        <li>Tree Shaking - remove unused code.</li>
      </ul>
    </blockquote>
  </div>

  <!-- Second Column -->
  <div style="flex: 1; padding: 10px;">
    <img src="./notes/zz_image_dump/example-of-react-faster.jpeg" alt="Why reach is faster, an Example with Web Bundler" width="400" height="500" />
  </div>

</div>