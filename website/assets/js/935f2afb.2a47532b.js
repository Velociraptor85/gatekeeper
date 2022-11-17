"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{4612:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"docs":[{"type":"category","label":"Getting Started","collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/gatekeeper/website/docs/next/","docId":"intro"},{"type":"link","label":"Installation","href":"/gatekeeper/website/docs/next/install","docId":"install"},{"type":"link","label":"Examples","href":"/gatekeeper/website/docs/next/examples","docId":"examples"}],"collapsible":true},{"type":"category","label":"How to use Gatekeeper","collapsed":false,"items":[{"type":"link","label":"How to use Gatekeeper","href":"/gatekeeper/website/docs/next/howto","docId":"howto"},{"type":"link","label":"Audit","href":"/gatekeeper/website/docs/next/audit","docId":"audit"},{"type":"link","label":"Handling Constraint Violations","href":"/gatekeeper/website/docs/next/violations","docId":"violations"},{"type":"link","label":"Replicating Data","href":"/gatekeeper/website/docs/next/sync","docId":"sync"},{"type":"link","label":"Exempting Namespaces","href":"/gatekeeper/website/docs/next/exempt-namespaces","docId":"exempt-namespaces"},{"type":"link","label":"Policy Library","href":"/gatekeeper/website/docs/next/library","docId":"library"},{"type":"link","label":"Customizing Startup Behavior","href":"/gatekeeper/website/docs/next/customize-startup","docId":"customize-startup"},{"type":"link","label":"Customizing Admission Behavior","href":"/gatekeeper/website/docs/next/customize-admission","docId":"customize-admission"},{"type":"link","label":"Metrics","href":"/gatekeeper/website/docs/next/metrics","docId":"metrics"},{"type":"link","label":"Debugging","href":"/gatekeeper/website/docs/next/debug","docId":"debug"},{"type":"link","label":"Emergency Recovery","href":"/gatekeeper/website/docs/next/emergency","docId":"emergency"},{"type":"link","label":"Cloud and Vendor Specific Fixes","href":"/gatekeeper/website/docs/next/vendor-specific","docId":"vendor-specific"},{"type":"link","label":"Failing Closed","href":"/gatekeeper/website/docs/next/failing-closed","docId":"failing-closed"},{"type":"link","label":"Mutation","href":"/gatekeeper/website/docs/next/mutation","docId":"mutation"},{"type":"link","label":"Constraint Templates","href":"/gatekeeper/website/docs/next/constrainttemplates","docId":"constrainttemplates"},{"type":"link","label":"External Data","href":"/gatekeeper/website/docs/next/externaldata","docId":"externaldata"},{"type":"link","label":"Validation of Workload Resources","href":"/gatekeeper/website/docs/next/expansion","docId":"expansion"},{"type":"link","label":"The gator CLI","href":"/gatekeeper/website/docs/next/gator","docId":"gator"},{"type":"link","label":"Working with Workload Resources","href":"/gatekeeper/website/docs/next/workload-resources","docId":"workload-resources"}],"collapsible":true},{"type":"category","label":"Architecture","collapsed":false,"items":[{"type":"link","label":"Operations","href":"/gatekeeper/website/docs/next/operations","docId":"operations"},{"type":"link","label":"Performance Tuning","href":"/gatekeeper/website/docs/next/performance-tuning","docId":"performance-tuning"}],"collapsible":true},{"type":"category","label":"Contributing","collapsed":false,"items":[{"type":"link","label":"Developers","href":"/gatekeeper/website/docs/next/developers","docId":"developers"},{"type":"link","label":"How to contribute","href":"/gatekeeper/website/docs/next/help","docId":"help"},{"type":"link","label":"Security","href":"/gatekeeper/website/docs/next/security","docId":"security"}],"collapsible":true}]},"docs":{"audit":{"id":"audit","title":"Audit","description":"Audit performs periodic evaluations of existing resources against constraints, detecting pre-existing misconfigurations.","sidebar":"docs"},"constrainttemplates":{"id":"constrainttemplates","title":"Constraint Templates","description":"ConstraintTemplates define a way to validate some set of Kubernetes objects in Gatekeeper\'s Kubernetes admission controller.  They are made of two main elements:","sidebar":"docs"},"customize-admission":{"id":"customize-admission","title":"Customizing Admission Behavior","description":"Gatekeeper is a Kubernetes admission webhook","sidebar":"docs"},"customize-startup":{"id":"customize-startup","title":"Customizing Startup Behavior","description":"Allow retries when adding objects to OPA","sidebar":"docs"},"debug":{"id":"debug","title":"Debugging","description":"NOTE: Verbose logging with DEBUG level can be turned on with --log-level=DEBUG.  By default, the --log-level flag is set to minimum log level INFO. Acceptable values for minimum log level are [DEBUG, INFO, WARNING, ERROR]. In production, this flag should not be set to DEBUG.","sidebar":"docs"},"developers":{"id":"developers","title":"Developers","description":"This section describes how Gatekeeper developers can leverage kind and Tilt for rapid iterative development. Kind allows developers to quickly provision a conformant Kubernetes cluster using Docker and Tilt enables smart rebuilds and live updates of your Kubernetes workload during development time.","sidebar":"docs"},"emergency":{"id":"emergency","title":"Emergency Recovery","description":"If a situation arises where Gatekeeper is preventing the cluster from operating correctly,","sidebar":"docs"},"examples":{"id":"examples","title":"Examples","description":"The demo/basic directory contains the above examples of simple constraints, templates and configs to play with.","sidebar":"docs"},"exempt-namespaces":{"id":"exempt-namespaces","title":"Exempting Namespaces","description":"Exempting Namespaces from Gatekeeper using config resource","sidebar":"docs"},"expansion":{"id":"expansion","title":"Validation of Workload Resources","description":"Feature State: Gatekeeper version v3.10+ (alpha)","sidebar":"docs"},"externaldata":{"id":"externaldata","title":"External Data","description":"Feature State: Gatekeeper version v3.7+ (alpha)","sidebar":"docs"},"failing-closed":{"id":"failing-closed","title":"Failing Closed","description":"Here we discuss how to configure Gatekeeper to fail closed and some factors you may want to consider before doing so.","sidebar":"docs"},"gator":{"id":"gator","title":"The gator CLI","description":"Feature State: Gatekeeper version v3.7+ (alpha)","sidebar":"docs"},"help":{"id":"help","title":"How to contribute","description":"Thanks for your interest in contributing to the Gatekeeper project! This document will help answer common questions you may have during your contribution.","sidebar":"docs"},"howto":{"id":"howto","title":"How to use Gatekeeper","description":"Gatekeeper uses the OPA Constraint Framework to describe and enforce policy. Look there for more detailed information on their semantics and advanced usage.","sidebar":"docs"},"install":{"id":"install","title":"Installation","description":"Prerequisites","sidebar":"docs"},"intro":{"id":"intro","title":"Introduction","description":"Goals","sidebar":"docs"},"library":{"id":"library","title":"Policy Library","description":"See the Gatekeeper policy library for a collection of constraint templates, sample constraints, and sample mutation policies that you can use with Gatekeeper.","sidebar":"docs"},"metrics":{"id":"metrics","title":"Metrics","description":"Below are the list of metrics provided by Gatekeeper:","sidebar":"docs"},"mutation":{"id":"mutation","title":"Mutation","description":"Feature State: Gatekeeper version v3.10+ (stable)","sidebar":"docs"},"operations":{"id":"operations","title":"Operations","description":"Gatekeeper is flexible in how it can be deployed. If desired, core pieces of functionality can be broken","sidebar":"docs"},"performance-tuning":{"id":"performance-tuning","title":"Performance Tuning","description":"Below we go into some of the considerations and options for performance tuning Gatekeeper.","sidebar":"docs"},"security":{"id":"security","title":"Security","description":"Please report vulnerabilities by email to open-policy-agent-security.","sidebar":"docs"},"sync":{"id":"sync","title":"Replicating Data","description":"The \\"Config\\" resource must be named config for it to be reconciled by Gatekeeper. Gatekeeper will ignore the resource if you do not name it config.","sidebar":"docs"},"vendor-specific":{"id":"vendor-specific","title":"Cloud and Vendor Specific Fixes","description":"Running on private GKE Cluster nodes","sidebar":"docs"},"violations":{"id":"violations","title":"Handling Constraint Violations","description":"Log denies","sidebar":"docs"},"workload-resources":{"id":"workload-resources","title":"Working with Workload Resources","description":"Workload Validation","sidebar":"docs"}}}')}}]);