find_package(Qt5 COMPONENTS Widgets WebEngine WebEngineWidgets REQUIRED)

set(SOURCES 
   qpdfwidget.h
   qpdfwidget.cpp
   pdfjsbridge.h
   pdfjsbridge.cpp
)

set(RESOURCES 
   pdfview.qrc
)

add_library (qpdf SHARED
   ${SOURCES}
   ${RESOURCES}
)

target_include_directories(qpdf PUBLIC .)

target_link_libraries(qpdf
   PRIVATE
   Qt5::Widgets
   Qt5::WebEngine
   Qt5::WebEngineWidgets  
)
