## Sections
<details><summary>Click Me</summary>
{{Lorem ipsum}}
</details>

<details><summary>Demo Slideshow</summary>
{{Demo Slideshow}}
</details>

## Code highlighting
```javascript
/*
  Extend an object with the properties from a list of
  source objects
*/
$tw.utils.extend = function(object /*, sourceObjectList */) {
    $tw.utils.each(Array.prototype.slice.call(arguments,1),function(source) {
        if(source) {
            for (var p in source) {
                object[p] = source[p];
            }
        }
    });
    return object;
};
```

## Tables

### HTTP Success Codes

|Code|Description|
|----|-----------|
|200| OK|
|201| Created|
|202| Accepted|
|203| Non-authoritative Information|
|204| No Content|
|205| Reset Content|
|206| Partial Content|
|207| Multi-Status|
|208| Already Reported|
|226| IM Used|

---
## Horizontal Rules
---

## Images

To save an image:

- Drag an image onto the wiki until the green bar is visible. When the image is imported, it is saved to disk. The image is then served like a regular web image, so there is no limit to the number of images the wiki can contain.
- You can paste a copied image directly to the wiki. Click outside the editor if currently editing, then paste. The default image name is *image.png* so always rename the image (and click the tick icon!) before importing.

<div align=center>[img width=600 [image-pasted.png]]</div>

### Sized, left
[img width=500 [PXL_20210825_203352627.NIGHT-01.jpeg]]

### Sized, right
<div align=right>
[img width=500 [PXL_20210825_203352627.NIGHT-01.jpeg]]
</div>

### Sized, centered
<div align=center>[img width=500 [PXL_20210825_203352627.NIGHT-01.jpeg]]</div>

### In a table
|One|Two|Three|
|:--|:-:|--:|
|[img width=500 [PXL_20210825_203352627.NIGHT-01.jpeg]]|[img width=500 [PXL_20210825_203352627.NIGHT-01.jpeg]]|[img width=500 [PXL_20210825_203352627.NIGHT-01.jpeg]]|
|Left align|Centre align|Right align|
