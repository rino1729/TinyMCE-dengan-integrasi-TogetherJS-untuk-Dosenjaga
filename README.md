# TinyMCE-dengan-integrasi-TogetherJS-untuk-Dosenjaga
berikut adalah aplikasi editor di web dengan teknologi javascript yang diintegrasikan dengan library TogetherJS. 
TogetherJS adalah library javascript dengan memanfaatkan teknologi webRTC yang memungkinkan user atau pengguna internet yang
mengunjungi suatu website dapat berinteraksi dengan sesama pengguna/user melalui interface kursor dan toolbar sederhana

# library dan Teknologi

untuk editor pada halaman ini menggunakan library TinyMCE dengan pemograman dasar berjenis javascript dan memanfaatkan library jquey.
untuk membuka library TinyMCE dengan dapat diunduh di
http://www.tinymce.com/download/download.php
untuk menempelkan pada project tambahkan script
```
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
```
atau tambahkan file lokal dengan tambahan library jquery.

untuk menambahkan fungsi TogetherJS pada halaman tambahakan script

```
<script src="https://togetherjs.com/togetherjs-min.js"></script>
```
dan fungsi "var" untuk memulai otomatis library TogetherJS

var TogetherJSConfig_autoStart = true;
