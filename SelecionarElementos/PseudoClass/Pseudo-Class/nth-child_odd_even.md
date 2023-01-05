# nth-child odd e even

even - números pares (posição 2,4...)
odd - números ímpares (posição 1,3...)

```html
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```

```css
ul li:nth-child(odd) {
  color: black;
  background-color: #eee;
}
ul li:nth-child(even) {
  color: gray;
}
```