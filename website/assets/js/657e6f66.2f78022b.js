"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9468],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7126:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"gator",title:"The gator CLI"},l=void 0,p={unversionedId:"gator",id:"version-v3.13.x/gator",title:"The gator CLI",description:"Feature State: Gatekeeper version v3.11+ (beta)",source:"@site/versioned_docs/version-v3.13.x/gator.md",sourceDirName:".",slug:"/gator",permalink:"/gatekeeper/website/docs/gator",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.13.x/gator.md",tags:[],version:"v3.13.x",frontMatter:{id:"gator",title:"The gator CLI"},sidebar:"docs",previous:{title:"Validating Workload Resources using ExpansionTemplate",permalink:"/gatekeeper/website/docs/expansion"},next:{title:"Working with Workload Resources",permalink:"/gatekeeper/website/docs/workload-resources"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"The <code>gator test</code> subcommand",id:"the-gator-test-subcommand",level:2},{value:"Usage",id:"usage",level:3},{value:"Specifying inputs",id:"specifying-inputs",level:4},{value:"Exit Codes",id:"exit-codes",level:4},{value:"Enforcement Actions",id:"enforcement-actions",level:5},{value:"Output Formatting",id:"output-formatting",level:4},{value:"The <code>gator verify</code> subcommand",id:"the-gator-verify-subcommand",level:2},{value:"Writing Test Suites",id:"writing-test-suites",level:3},{value:"Suites",id:"suites",level:3},{value:"Tests",id:"tests",level:3},{value:"Cases",id:"cases",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Validating Metadata-Based Constraint Templates",id:"validating-metadata-based-constraint-templates",level:4},{value:"The <code>gator expand</code> subcommand",id:"the-gator-expand-subcommand",level:2},{value:"Usage",id:"usage-2",level:3},{value:"Bundling Policy into OCI Artifacts",id:"bundling-policy-into-oci-artifacts",level:2},{value:"Gotchas",id:"gotchas",level:2},{value:"Duplicate violation messages",id:"duplicate-violation-messages",level:3},{value:"Matching is case-sensitive",id:"matching-is-case-sensitive",level:3},{value:"Referential constraints and Namespace-scoped resources",id:"referential-constraints-and-namespace-scoped-resources",level:3},{value:"Platform Compatibility",id:"platform-compatibility",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Feature State"),": Gatekeeper version v3.11+ (beta)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gator")," CLI is a tool for evaluating Gatekeeper ConstraintTemplates and\nConstraints in a local environment."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"gator"),", you may either\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/releases"},"download the binary"),"\nrelevant to your system or build it directly from source. On macOS and Linux,\nyou can also install ",(0,o.kt)("inlineCode",{parentName:"p"},"gator")," using ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),"."),(0,o.kt)("p",null,"To build from source:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go get github.com/open-policy-agent/gatekeeper/cmd/gator\n")),(0,o.kt)("p",null,"Install with Homebrew:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install gator\n")),(0,o.kt)("h2",{id:"the-gator-test-subcommand"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"gator test")," subcommand"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator test")," allows users to test a set of Kubernetes objects against a set of\nTemplates and Constraints. The command returns violations when found and\ncommunicates success or failure via its exit status. This command will also\nattempt to expand any resources passed in if a supplied ",(0,o.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate"),"\nmatches these resources."),(0,o.kt)("p",null,"Note: The ",(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," command was first called ",(0,o.kt)("inlineCode",{parentName:"p"},"gator test"),". These names were\nchanged to better align ",(0,o.kt)("inlineCode",{parentName:"p"},"gator")," with other projects in the open-policy-agent\nspace."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"specifying-inputs"},"Specifying inputs"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator test")," supports inputs through the ",(0,o.kt)("inlineCode",{parentName:"p"},"--filename")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--image")," flags, and\nvia stdin. The three methods of input can be used in combination or individually. The ",(0,o.kt)("inlineCode",{parentName:"p"},"--filename")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--image")," flags are repeatable."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--filename")," flag can specify a single file or a directory. If a file is\nspecified, that file must end in one of the following extensions: ",(0,o.kt)("inlineCode",{parentName:"p"},".json"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},".yaml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".yml"),". Directories will be walked, and any files of extensions other\nthan the aforementioned three will be skipped."),(0,o.kt)("p",null,"For example, to test a manifest (piped via stdin) against a folder of policies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat my-manifest.yaml | gator test --filename=template-and-constraints/\n")),(0,o.kt)("p",null,"Or you can specify both as flags:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gator test -f=my-manifest.yaml -f=templates-and-constraints/\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u2757The ",(0,o.kt)("inlineCode",{parentName:"p"},"--image")," flag is in ",(0,o.kt)("em",{parentName:"p"},"alpha")," stage.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--image")," flag specifies a content addressable OCI artifact containing\npolicy files. The image(s) will be copied into the local filesystem in a\ntemporary directory, the location of which can be overridden with\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"--tempdir"),"\nflag. Only files with the aforementioned extensions will be processed. For\ninformation on how to create OCI policy bundles, see\nthe ",(0,o.kt)("a",{parentName:"p",href:"#bundling-policy-into-oci-artifacts"},"Bundling Policy into OCI Artifacts"),"\nsection."),(0,o.kt)("p",null,"For example, to test a manifest (piped via stdin) against an OCI Artifact\ncontaining policies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat my-manifest.yaml | gator test --image=localhost:5000/gator/template-library:v1 \\\n  --image=localhost:5000/gator/constraints:v1 \n")),(0,o.kt)("h4",{id:"exit-codes"},"Exit Codes"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator test")," will return a ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," exit status when the objects, Templates, and\nConstraints are successfully ingested, no errors occur during evaluation, and no\nviolations are found."),(0,o.kt)("p",null,"An error during evaluation, for example a failure to read a file, will result in\na ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," exit status with an error message printed to stderr."),(0,o.kt)("p",null,"Policy violations will generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," exit status as well, but violation\ninformation will be printed to stdout."),(0,o.kt)("h5",{id:"enforcement-actions"},"Enforcement Actions"),(0,o.kt)("p",null,"While violation data will always be returned when an object is found to be\nviolating a Constraint, the exit status can vary. A constraint with\n",(0,o.kt)("inlineCode",{parentName:"p"},'spec.enforcementAction: ""')," or ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.enforcementAction: deny")," will produce a\n",(0,o.kt)("inlineCode",{parentName:"p"},"1")," exit code, but other enforcement actions like ",(0,o.kt)("inlineCode",{parentName:"p"},"dryrun")," will not. This is\nmeant to make the exit code of ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," consistent with rejection of the object by\nGatekeeper's webhook. A Constraint set to ",(0,o.kt)("inlineCode",{parentName:"p"},"warn")," would not trigger a rejection\nin the webhook, but ",(0,o.kt)("em",{parentName:"p"},"would")," produce a violation message. The same is true for\nthat constraint when used in ",(0,o.kt)("inlineCode",{parentName:"p"},"gator test"),"."),(0,o.kt)("h4",{id:"output-formatting"},"Output Formatting"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator test")," supports a ",(0,o.kt)("inlineCode",{parentName:"p"},"--output")," flag that allows the user to specify a\nstructured data format for the violation data. This information is printed to\nstdout."),(0,o.kt)("p",null,"The allowed values are ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),", specified like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gator test --filename=manifests-and-policies/ --output=json\n")),(0,o.kt)("h2",{id:"the-gator-verify-subcommand"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"gator verify")," subcommand"),(0,o.kt)("h3",{id:"writing-test-suites"},"Writing Test Suites"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," organizes tests into three levels: Suites, Tests, and Cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Suite is a file which defines Tests."),(0,o.kt)("li",{parentName:"ul"},"A Test declares a ConstraintTemplate, a Constraint, and Cases to test the\nConstraint."),(0,o.kt)("li",{parentName:"ul"},"A Case defines an object to validate and whether the object is expected to\npass validation.")),(0,o.kt)("p",null,"Any file paths declared in a Suite are assumed to be relative to the Suite\nitself. Absolute paths are not allowed. Thus, it is possible to move around a\ndirectory containing a Suite, and the files it uses for tests."),(0,o.kt)("h3",{id:"suites"},"Suites"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library/blob/8765ec11c12a523688ed77485c7a458df84266d6/library/general/allowedrepos/suite.yaml"},"An example Suite file"),"\n."),(0,o.kt)("p",null,"To be valid, a Suite file must declare:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Suite\napiVersion: test.gatekeeper.sh/v1alpha1\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," silently ignores files which do not declare these. A Suite may\ndeclare multiple Tests, each containing different Templates and Constraints.\nEach Test in a Suite is independent."),(0,o.kt)("h3",{id:"tests"},"Tests"),(0,o.kt)("p",null,"Each Suite contains a list of Tests under the ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," field."),(0,o.kt)("p",null,"A Test compiles a ConstraintTemplate, and instantiates a Constraint for the\nConstraintTemplate. It is an error for the Constraint to have a different type\nthan that defined in the ConstraintTemplate spec.crd.spec.names.kind, or for the\nConstraintTemplate to not compile."),(0,o.kt)("h3",{id:"cases"},"Cases"),(0,o.kt)("p",null,"Each Test contains a list of Cases under the ",(0,o.kt)("inlineCode",{parentName:"p"},"cases")," field."),(0,o.kt)("p",null,"A Case validates an object against a Constraint. The case may specify that the\nobject is expected to pass or fail validation, and may make assertions about the\nreturned violations (if any)."),(0,o.kt)("p",null,"A Case must specify ",(0,o.kt)("inlineCode",{parentName:"p"},"assertions")," and whether it expects violations. The simplest\nway to declare this is:"),(0,o.kt)("p",null,"The Case expects at least one violation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"assertions:\n- violations: yes\n")),(0,o.kt)("p",null,"The Case expects no violations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"assertions:\n- violations: no\n")),(0,o.kt)("p",null,"Assertions contain the following fields, acting as conditions for each assertion\nto check."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"violations"),' is either "yes", "no", or a non-negative integer.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'If "yes", at least one violation must otherwise match the assertion.'),(0,o.kt)("li",{parentName:"ul"},'If "no", then no violation messages must otherwise match the assertion.'),(0,o.kt)("li",{parentName:"ul"},'If a nonnegative integer, then exactly that many violations must match.\nDefaults to "yes".'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message")," matches violations containing the exact string specified. ",(0,o.kt)("inlineCode",{parentName:"li"},"message"),"\nis case-sensitive. If not specified or explicitly set to empty string, all\nmessages returned by the Constraint are considered matching.")),(0,o.kt)("p",null,"A Case may specify multiple assertions. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  - name: both-disallowed\n    object: samples/repo-must-be-openpolicyagent/disallowed_both.yaml\n    assertions:\n    - violations: 2\n    - message: initContainer\n      violations: 1\n    - message: container\n      violations: 1\n")),(0,o.kt)("p",null,"This Case specifies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There are exactly two violations."),(0,o.kt)("li",{parentName:"ul"},'There is exactly one violation containing "initContainer".'),(0,o.kt)("li",{parentName:"ul"},'There is exactly one violation containing "container".')),(0,o.kt)("p",null,"It is valid to assert that no violations match a specified message. For example,\nthe below is valid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- violations: yes\n- violations: no\n  message: foobar\n")),(0,o.kt)("p",null,'This Case specifies that there is at least one violation, and no violations\ncontain the string "foobar".'),(0,o.kt)("p",null,"A Case may specify ",(0,o.kt)("inlineCode",{parentName:"p"},"inventory"),", which is a list of paths to files containing\nKubernetes objects to put in ",(0,o.kt)("inlineCode",{parentName:"p"},"data.inventory")," for testing referential\nconstraints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"inventory:\n- samples/data_objects.yaml\n")),(0,o.kt)("p",null,"More examples of working ",(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," suites are available in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library/tree/master/library"},"gatekeeper-library"),"\nrepository."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,"To run a specific suite:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gator verify suite.yaml\n")),(0,o.kt)("p",null,"To run all suites in the current directory and all child directories recursively"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gator verify ./...\n")),(0,o.kt)("p",null,"To only run tests whose full names contain a match for a regular expression, use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'gator verify path/to/suites/... --run "disallowed"\n')),(0,o.kt)("h4",{id:"validating-metadata-based-constraint-templates"},"Validating Metadata-Based Constraint Templates"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," may be used with an ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/k8s.io/kubernetes/pkg/apis/admission#AdmissionReview"},(0,o.kt)("inlineCode",{parentName:"a"},"AdmissionReview")),"\nobject to test your constraints. This can be helpful to simulate a certain operation (",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE"),", etc.)\nor ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/k8s.io/kubernetes@v1.25.3/pkg/apis/authentication#UserInfo"},(0,o.kt)("inlineCode",{parentName:"a"},"UserInfo"))," metadata.\nRecall that the ",(0,o.kt)("inlineCode",{parentName:"p"},"input.review.user")," can be accessed in the Rego code (see ",(0,o.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/howto#input-review"},"Input Review")," for more guidance).\nA few examples for how to structure your yaml can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/03e6adb74f1714242cf936fd27eee19a0eda2d52/pkg/gator/fixtures/fixtures.go#L506-L528"},"here"),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"AdmissionReview")," object can be specified where you would specify the object under test above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  - name: both-disallowed\n    object: path/to/test_admission_review.yaml\n    assertions:\n    - violations: 1\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/audit"},(0,o.kt)("inlineCode",{parentName:"a"},"audit"))," or ",(0,o.kt)("inlineCode",{parentName:"p"},"gator test")," are different enforcement points and they don't have the ",(0,o.kt)("inlineCode",{parentName:"p"},"AdmissionReview")," request metadata."),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"gator verify --help")," for more information."),(0,o.kt)("h2",{id:"the-gator-expand-subcommand"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"gator expand")," subcommand"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator expand")," allows users to test the behavior of their Expansion configs. The\ncommand accepts a file or directory containing the expansion configs, which\nshould include the resource(s) under test, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate"),"(s), and\noptionally any Mutation CRs. The command will output a manifest containing the\nexpanded resources."),(0,o.kt)("p",null,"If the mutators use spec.match.namespaceSelector, the namespace the resource\nbelongs to must be supplied in order to correctly evaluate the match criteria.\nIf a resource is specified for expansion but its non-default namespace is not\nsupplied, the command will exit 1."),(0,o.kt)("h3",{id:"usage-2"},"Usage"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"gator test"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gator expand")," expects a ",(0,o.kt)("inlineCode",{parentName:"p"},"--filename")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--image"),"\nflag. The flags can be used individually, in combination, and/or repeated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'gator expand --filename="manifest.yaml" \u2013filename="expansion-policy/" \n')),(0,o.kt)("p",null,"Or, using an OCI Artifact for the expansion configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'gator expand --filename="my-deployment.yaml" --image=localhost:5000/gator/expansion-policy:v1\n')),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"gator expand")," will output to stdout, but a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2013outputfile")," flag can be\nspecified to write the results to a file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'gator expand --filename="manifest.yaml" \u2013outputfile="results.yaml"\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator expand")," can output in ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," (default is ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'gator expand --filename="manifest.yaml" \u2013format="json"\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("inlineCode",{parentName:"p"},"gator expand \u2013help")," for more details. ",(0,o.kt)("inlineCode",{parentName:"p"},"gator expand")," will exit 1 if there\nis a problem parsing the configs or expanding the resources."),(0,o.kt)("h2",{id:"bundling-policy-into-oci-artifacts"},"Bundling Policy into OCI Artifacts"),(0,o.kt)("p",null,"It may be useful to bundle policy files into OCI Artifacts for ingestion during\nCI/CD workflows. The workflow could perform validation on inbound objects using\n",(0,o.kt)("inlineCode",{parentName:"p"},"gator test|expand"),"."),(0,o.kt)("p",null,"A policy bundle can be composed of any arbitrary file structure, which ",(0,o.kt)("inlineCode",{parentName:"p"},"gator"),"\nwill walk recursively. Any files that do not end in ",(0,o.kt)("inlineCode",{parentName:"p"},"json|yaml|yml")," will be\nignored. ",(0,o.kt)("inlineCode",{parentName:"p"},"gator")," does not enforce any file schema in the artifacts; it only\nrequires that all files of the support extensions describe valid Kubernetes\nresources."),(0,o.kt)("p",null,"We recommend using the ",(0,o.kt)("a",{parentName:"p",href:"https://oras.land/cli/"},"Oras CLI")," to create OCI\nartifacts. For example, to push a bundle containing the 2 local directories\n",(0,o.kt)("inlineCode",{parentName:"p"},"constraints")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"template_library"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oras push localhost:5000/gator/policy-bundle:v1 ./constraints/:application/vnd.oci.image.layer.v1.tar+gzip \\\n  ./template_library/:application/vnd.oci.image.layer.v1.tar+gzip\n")),(0,o.kt)("p",null,"This expects that the ",(0,o.kt)("inlineCode",{parentName:"p"},"constraints")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"template_library")," directories are at\nthe path that this command is being run from."),(0,o.kt)("h2",{id:"gotchas"},"Gotchas"),(0,o.kt)("h3",{id:"duplicate-violation-messages"},"Duplicate violation messages"),(0,o.kt)("p",null,"Rego de-duplicates identical violation messages. If you want to be sure that a\ntest returns multiple violations, use a unique message for each violation.\nOtherwise, if you specify an exact number of violations, the test may fail."),(0,o.kt)("h3",{id:"matching-is-case-sensitive"},"Matching is case-sensitive"),(0,o.kt)("p",null,"Message declarations are case-sensitive. If a test fails, check that the\nexpected message's capitalization exactly matches the one in the template."),(0,o.kt)("h3",{id:"referential-constraints-and-namespace-scoped-resources"},"Referential constraints and Namespace-scoped resources"),(0,o.kt)("p",null,"Gator cannot determine if a type is Namespace-scoped or not, so it does not\nassign objects to the default Namespace automatically. Always specify\n",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.namespace")," for Namespace-scoped objects to prevent test failures, or\nto keep from specifying templates which will fail in a real cluster."),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform Compatibility"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator")," is only automatically tested on Linux for each commit. If you want to\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"gator")," on other systems, let us know by replying to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/issues/1655"},"this issue"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gator verify")," has been manually tested on Windows and works as of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/commit/b3ed94406583c85f3102c54a32f362d27f76da96"},"this commit"),"\n. Continued functionality is not guaranteed."),(0,o.kt)("p",null,"File paths which include backslashes are not portable, so suites using such\npaths will not work as intended on Windows."))}m.isMDXComponent=!0}}]);