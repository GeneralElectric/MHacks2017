# Introduction

This repository is being provided to enable students that are participating
in the MHacks 2017 event quickly create development environments. One of
the most asked questions, during mentoring sessions was to help students
setup development tools. These tools included multiple databases and
application development frameworks. This repository contains a collection
of instructions and tools to help you setup these tools. In order to
reduce the complexity of setting up these environments, we are relying on
the [Docker Toolset](https://www.docker.com/what-docker).

# Docker Prerequisite

Docker is a containerization technology that packages up software in
very portable and executable fashion. In order to use the tools specified
in this repository you will to have a Docker *engine* running on your
development machine. To install Docker, follow the appropriate link
below:

* MacOS - [Docker for Mac](https://www.docker.com/docker-mac)
* Windows - [Docker for Windows](https://www.docker.com/docker-windows)

# Databases

If you **just** need a database server running on your
development machine you can pick any one of the scripts in the
[/databases](databases) directory of this repository. These
scripts will start and stop the database, while maintaining
persistent data files on your local machine.

# Application Frameworks

The scripts located in the [/frameworks](frameworks) directory
will standup a combination of an application framework (e.g.
Ruby on Rails) and a database. The frameworks will enable you
to concentrate on your code use the Docker containers to
handle all the development environment dependencies.
