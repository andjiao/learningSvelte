<script>

//1. ABOUT REFERENCE VAARIABLES
let name ="Bo"
setTimeout(()=>
{
  name ="Nies";
}, 3000);
let a=10;
let b =20;
let myHtml ="<strong>Andre</strong>"


//2. ABOUT ADDING ATTRIBUTES
let imageSrc = "/build/wekkend-kopi.jpeg"

//when the variable-name has the same name as an attribute name fx. src is an attribute name, and if the variable is named as an attribute name
//you can in the html-element just write {src}, no need to equal-sign
//it is going to automatically add  that attribute 
let src = "/build/wekkend-kopi.jpeg"

//when condition is true it is disabled, when false it is editable 
let isDisabled =true;
let disabled =true;
//used as a variaable for the alt in img-tag
let testName = "testName";



//3. ABOUT ADDING & REMOVING HTML CLASSES
//if changing the yes to something else bc the condition in the html is, that it should be specific yes
//before it can be pink
//, the text becomes black by default and the class will be removed in the html 
let textIsPink ="yes";
let textIsPink2 =true;
//if the variable matches the class, the html is automatically going to toggle based on  the variable  
//to check if this work, change to false and look in devtools to see that the class has been removed  
let nisse =true;
setInterval(()=>{
  nisse=!nisse;
}, 1000)

//4. ABOUT GLOBAL STYLE
import Other from "./Other.svelte"


//5. ABOUT REACTIVITY & REACTIVE DECLARATION
// Reactive declaration is a way for you to generate computed data  
//fx lets say 
let age = 30;
let name2 = "Andrea";
function handleClick(){
  age=age+1;
}
// this one is saying that whenever one of these variables inside  here updates
//the whole string is going to be updated with the new values 

//so we are not limited to declare variables, we can do it with statements like the greeting
// another way to do it, possible to do with condition: $: if (age >35) {console.log (`Your name is ${name2} and you're age is {age}`)}
$: greeting= `Your name is ${name2} and you're age is {age}`;

//6. ABOUT COMPONENTS & PROPERTIES

//properties is passing data fromt top to bottom into your components
//these exports comes from the main.js 
export let name3;
export let age3;

import Third from "./Third.svelte";
const person={
  name4: "andrea",
  age4: 40,
};

//7. UPDATING ARRAYS & OBJECTS
let webTechno = ["javascript", "python", "css"]
setTimeout(()=>{

  //Svelte reacts only to new reassignment
  //since .push, .pop etc is not an reassignment, therefor svelte does not see thise changes
  //to solve this, we need to reassign the array/object to itself, so svelte sees the new changes, which is done on line 82 & line 84
  webTechno.push("svelte");
  //another way to reassign and push at the same time, using spread-operator
  webTechno =[...webTechno, "svelte"]
  //we need to reassign the value of webTechno so the svelte register the changes
  webTechno=webTechno;
}, 2000);

let person2 ={
name: "andre",
age:90,
profession: "cake-eater"
}

//the equal-sign triggers the update 
setTimeout(()=>{
  person2.profession ="banana-eater"
},3000)

//8.CONDITIONAL LOGIC
let showNisse = true;

</script>

<!--1. ABOUT REFERENCE VAARIABLES -->
<p> Jeg hedder {name}</p>

<h1>a + b {a+b}</h1>
<h1>{a} + {b} {a+b}</h1>

<div> more text {@html myHtml}</div>

<!--2. ABOUT ADDING ATTRIBUTES  -->
<img src ={imageSrc} width ="154" alt="logo">
<img {src} width ="154" alt="logo's {testName}">

<input type="text" value="this is an example" disabled ={isDisabled}>
<input type="text" value="this is an example" {disabled} >

<!-- 3. ABOUT ADDING & REMOVING HTML CLASSES-->
<h1 class="water" class:nisse={textIsPink === "yes"}>Here are some pink text</h1>
<h1 class="water" class:nisse={textIsPink2}>Here are some pink text</h1>
<h1 class="water" class:nisse >Here are some pink text</h1>



<!--4. ABOUT GLOBAL STYLE & CSS -->
<other></other>

<!--5. ABOUT REACTIVITY & REACTIVE DECLARATION/ ASSIGNMENT -->
<p>My name is {name2} and my age is {age}</p>
<button on:click={handleClick}>Increase age </button>

<p>{greeting}}</p>
<button on:click={handleClick}>Increase age </button>

<!--6. ABOUT COMPONENTS & PROPERTIES/NESTING -->
<p>hello {name3} my age is {age3}</p>
<!--<Third name4 = "ninja"></Third>-->
<Third {...person}></Third>

<!--7. UPDATING ARRAYS & OBJECTS-->
<ul>
  {#each webTechno as item }
  <li>{item}</li>
    
  {/each}
</ul>

<p>{person2.name} is {person2.age} years old, and they are {person2.profession}</p>

<!--8. CONDITIONAL LOGIC-->
<!--is two bigger than one, yes, therefor shot the p-tag with nisse, if the condition is false, it does not show the p-tag-->
<!--{#if 2>1}-->

<!--Or we can declare a variable in js and use that to define wheter the conditon is true/false-->
{#if showNisse}
<p> nisse</p>
{:else if 9===9}
<p>Abe</p>
{:else}
<p>Jeppe</p>
<!--closing the if-statement-->
{/if}
<style>
  
  /* 3. ABOUT ADDING & REMOVING HTML CLASSES*/
  .nisse{
    color:pink;
  }

  /*4. ABOUT GLOBAL STYLE & CSS*/
  /* applying the style globally, in parameter set which htlm-tag that should have this style*/
  :global(h1){
    background-color: blueviolet;
    padding: 15px;
    color: brown;
  }
</style>

  
