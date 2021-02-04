find_package(Qt5 COMPONENTS Widgets REQUIRED)

set(SOURCES 
   mainwindow.h
   mainwindow.cpp
   main.cpp
)

set(RESOURCES 
   pdfviewer.qrc
)

add_executable (qpdfviewer
   ${SOURCES}
   ${RESOURCES}
)

target_link_libraries(qpdfviewer
   PRIVATE
   Qt5::Widgets
   qpdf
)
