# Project description

### Home+About+contact+feature Page :

- এখানে শুধু design perpouse এ কিছু components add করা হয়েছে

### Task Page :

- এখানে get req এর সাহায্যে সব tasks এনে তাদের উপর searching + filtering feature implement করা হয়েছে
- প্রতিটি Task কে card এর সাহায্যে দেখানো হয়ছে যাকে click করে individual task details দেখা যাবে সেখানে special time countdown দেয়া হয়েছে

### Login Page :

- এখানে fb+google login পাশাপাশি email signup+login দেখানো হয়েছে ও একই সাথে Post req করে user কে db তে পাঠানো হয়েছে
- design perpouse এ কিছু non-featured elements রাখা হয়েছে

## Dashboard

### User related

- index page এ profile রাখা হয়েছে যেখানে requirement অনুযায়ি সব information get req দিয়ে Db থেকে আনা হয়েছে। যদি কোণ infomation না থাকে তখন demo information রাখা হয়েছে সৌন্দর্যের জন্য
  -এখানে আছে edit profile+pass এর baTon যা দিয়ে কাংক্ষিত কাজ করা যাবে

### Task related

- add task পেজ এ গিয়ে task add করা যাবে
- manage task এ সকল task table এর মত করে দেখানো হয়েছে যেখানে delete + edit করা যাবে
- edit করতে গেলে আলাদে পেজে নিয়ে যাবে যেখানে default value হিসেবে get req এর মাধ্যমে data আনা হয়েছে

## যত req ছিল সব করা হয়েছে শুধুমাত্র option গুলো বাদে।

## আর নিচে কিছু plans note করা হয়েছে যেগুলো অন্য সময় implement করব

# BUGS & pendings

- fb login pending
- process in not working while env is importing
- use axios everywhere for CRUD
- worng email error showing
- multile toast during registration at a time
- same email একবার DB তে সেভ হয়ে গেলে আরকোন account ই যাতে না হয়
- reset password in edit password
- pagination fixing
- confirm popup styling
- edit profile/task e default value নেবার কারনে update হবার পর যখন form reset হয় তখন reload এর মত করে পুরাতন Data নেয় নতুন Data নেয় না
- i have to force reload after each first login/register/signby google/fb it has to be off

# DEVELOPING SCOPES

- home page এর প্রতিটা section কে dynamic করা
- drag-drop করা
- tasks page এ user এর নিজের create করা task গুলো কে আলাদা করে category আর all task আলাদা করে show করা
