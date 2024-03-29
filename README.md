# Kata-Runner

A command line tool that allows engineers to avoid the tedious setup steps of
practicing as kata

## Steps to get started

### 1. Install Deno

Deno is the runtime I used for this repository. So you will need this runtime
installed on your machine.

- Follow
  [these steps](https://docs.deno.com/runtime/manual/getting_started/installation)
  to install Deno

### 2. Install the Kata CLI

The Kata CLI(Command Line Interface) is a tool that should make the interaction
with a kata much simpler for you. The below command is going to run some
typescript code that sets up a bash alias. This way you can run the tool in any
bash terminal

```sh
deno install --unstable -A -f -n kata https://raw.githubusercontent.com/rsm-hcd/kata-runner/main/mod.ts
```

### 3. Begin your first Kata

- Since this is your first time using this, lets see what commands are available
  to us: 
```sh
kata -h
```
- One of the commands is the `list` command. Lets list all of our registered
  Katas: 
```sh
kata list
```
- You should see that you have none. so lets add one:
```sh
kata add https://api.github.com/repos/rsm-hcd/cop-clean-code-katas/contents/kata-templates/hello-world
```

- Now you have a kata added and we can now see that listed out:
```sh
kata list
```
  - Notice that the kata has a name of `hello-world`
- Lets begin the kata. Navigate to an empty directory of your choice run the following command inside of a terminal: 
```sh
kata begin hello-world
```
This will populate your current directory
with the hello-world kata. 

## To Uninstall
```sh
deno uninstall kata
```
